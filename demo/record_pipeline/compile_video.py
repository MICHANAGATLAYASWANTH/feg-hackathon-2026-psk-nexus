#!/usr/bin/env python3
"""
Compile frames from capture_demo.js into a pristine 1080p MP4 demo video for LinkedIn.
Uses OpenCV VideoWriter and macOS avconvert.
"""

import os
import glob
import subprocess
import cv2
import numpy as np

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
FRAMES_DIR = os.path.join(BASE_DIR, 'frames')
RAW_VIDEO = os.path.join(BASE_DIR, 'raw_demo.mov')
FINAL_VIDEO = os.path.abspath(os.path.join(BASE_DIR, '..', 'psk_nexus_linkedin_demo.mp4'))

def create_title_slide(title, subtitle, badge, width=1920, height=1080, duration_frames=90):
    """Generate a sleek, branded title card for intro/outro."""
    img = np.zeros((height, width, 3), dtype=np.uint8)
    # Gradient navy background: #001A2C to #012E4D
    for y in range(height):
        ratio = y / height
        b = int(44 * (1 - ratio) + 77 * ratio)
        g = int(26 * (1 - ratio) + 46 * ratio)
        r = int(0 * (1 - ratio) + 1 * ratio)
        img[y, :] = (b, g, r)

    # Decorative header gold line
    cv2.line(img, (200, 320), (1720, 320), (0, 204, 255), 3) # BGR for #FFCC00

    # Badge
    cv2.rectangle(img, (200, 240), (620, 295), (0, 204, 255), -1)
    cv2.putText(img, badge, (215, 280), cv2.FONT_HERSHEY_DUPLEX, 0.9, (44, 26, 0), 2, cv2.LINE_AA)

    # Main Title
    cv2.putText(img, title, (200, 420), cv2.FONT_HERSHEY_DUPLEX, 1.8, (255, 255, 255), 3, cv2.LINE_AA)

    # Subtitle
    cv2.putText(img, subtitle, (200, 500), cv2.FONT_HERSHEY_SIMPLEX, 1.1, (224, 163, 0), 2, cv2.LINE_AA)

    # 3 Metric Highlights in boxes
    metrics = [
        ("+31% Conversion", "HTK-CRO Baseline"),
        ("-77% Discovery Time", "Median TTFA to 85s"),
        ("EUR 3.84M Turnover", "21.3x Modeled ROI")
    ]
    box_w = 460
    start_x = 200
    for i, (val, sub) in enumerate(metrics):
        bx = start_x + i * (box_w + 70)
        cv2.rectangle(img, (bx, 620), (bx + box_w, 760), (60, 40, 10), -1)
        cv2.rectangle(img, (bx, 620), (bx + box_w, 760), (120, 80, 20), 2)
        cv2.putText(img, val, (bx + 25, 680), cv2.FONT_HERSHEY_DUPLEX, 1.1, (0, 204, 255), 2, cv2.LINE_AA)
        cv2.putText(img, sub, (bx + 25, 725), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (180, 180, 180), 1, cv2.LINE_AA)

    # Footer
    cv2.putText(img, "FEG Innovation Hackathon 2026 | Challenge 1: Session Quality & Action Conversion", 
                (200, 920), cv2.FONT_HERSHEY_SIMPLEX, 0.85, (148, 163, 184), 2, cv2.LINE_AA)
    cv2.putText(img, "Live Prototype: https://feg-ten.vercel.app", 
                (200, 970), cv2.FONT_HERSHEY_SIMPLEX, 0.85, (0, 204, 255), 2, cv2.LINE_AA)

    return [img] * duration_frames

def main():
    frame_files = sorted(glob.glob(os.path.join(FRAMES_DIR, 'frame_*.jpg')))
    if not frame_files:
        print("❌ No frames found in", FRAMES_DIR)
        return 1

    print(f"📦 Found {len(frame_files)} frames. Initializing video writer...")

    fps = 30.0
    width = 1920
    height = 1080

    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(RAW_VIDEO, fourcc, fps, (width, height))

    # 1. Intro Slide (3 seconds = 90 frames)
    print("🎬 Adding Intro Slide...")
    intro_frames = create_title_slide(
        title="PSK NEXUS: In-Session Conversion Engine",
        subtitle="Converting Browsing into Confident, Informed Action (0% Dark Patterns)",
        badge="FEG HACKATHON 2026",
        duration_frames=75
    )
    for f in intro_frames:
        out.write(f)

    # 2. Captured Application Walkthrough Frames
    print(f"🎬 Writing {len(frame_files)} application walkthrough frames...")
    for i, fpath in enumerate(frame_files):
        frame = cv2.imread(fpath)
        if frame is not None:
            if frame.shape[0] != height or frame.shape[1] != width:
                frame = cv2.resize(frame, (width, height))
            out.write(frame)
        if i % 150 == 0:
            print(f"   Processed {i}/{len(frame_files)} frames...")

    # 3. Outro Slide (3 seconds = 90 frames)
    print("🎬 Adding Outro Slide...")
    outro_frames = create_title_slide(
        title="PSK Nexus: Proven Impact for PSK.hr",
        subtitle="Permanent Cloud Deployment & Embeddable Web Component SDK",
        badge="PROJECT COMPLETE",
        duration_frames=75
    )
    for f in outro_frames:
        out.write(f)

    out.release()
    print(f"✅ Raw video written to {RAW_VIDEO}")

    # 4. Convert to optimal web/LinkedIn H.264 MP4 using avconvert
    print("🔄 Optimizing video for LinkedIn with macOS avconvert (Preset1920x1080)...")
    cmd = [
        "/usr/bin/avconvert",
        "--source", RAW_VIDEO,
        "--preset", "Preset1920x1080",
        "--output", FINAL_VIDEO,
        "--replace"
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print("⚠️ avconvert error:", res.stderr)
        # Fallback to copy raw video
        os.rename(RAW_VIDEO, FINAL_VIDEO)
    else:
        print("✅ avconvert optimization completed successfully!")
        if os.path.exists(RAW_VIDEO):
            os.remove(RAW_VIDEO)

    file_size_mb = os.path.getsize(FINAL_VIDEO) / (1024 * 1024)
    print(f"🎉 Final LinkedIn Demo Video ready at:")
    print(f"   👉 {FINAL_VIDEO}")
    print(f"   📊 Size: {file_size_mb:.2f} MB")
    print(f"   📐 Resolution: 1920x1080 (Full HD, 30fps)")
    return 0

if __name__ == '__main__':
    exit(main())
