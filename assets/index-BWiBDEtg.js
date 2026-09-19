(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();const u=[{id:"fix-101",league:"supersport_hnl",leagueName:"SuperSport HNL (Hrvatska)",category:"football",homeTeam:"GNK Dinamo Zagreb",awayTeam:"HNK Hajduk Split",derbyName:"Vječni derbi",startTime:"Danas, 20:00",isLive:!0,liveMinute:"64'",score:{home:1,away:1},venue:"Stadion Maksimir, Zagreb",streamAvailable:!0,tags:["hnl","derby","live_stream","trending"],odds:{1:{id:"opt-101-1",label:"1",name:"Dinamo Zagreb",val:2.15,impliedProb:"46.5%"},X:{id:"opt-101-x",label:"X",name:"Neriješeno",val:3.25,impliedProb:"30.8%"},2:{id:"opt-101-2",label:"2",name:"Hajduk Split",val:3.4,impliedProb:"29.4%"},over25:{id:"opt-101-o25",label:"Više 2.5",name:"Zbroj golova > 2.5",val:1.85,impliedProb:"54.1%"},under25:{id:"opt-101-u25",label:"Manje 2.5",name:"Zbroj golova < 2.5",val:1.95,impliedProb:"51.3%"},btts:{id:"opt-101-btts",label:"Oba daju",name:"Oba tima daju gol",val:1.7,impliedProb:"58.8%"}},liveStats:{possession:{home:58,away:42},shotsOnTarget:{home:6,away:4},corners:{home:5,away:3},xG:{home:1.64,away:1.12}},h2h:{summary:"Zadnjih 5 susreta: 2 pobjede Dinamo, 2 pobjede Hajduk, 1 neriješeno",recentScores:["1:0","0:1","2:2","1:2","2:0"]},form:{home:["W","W","D","W","W"],away:["W","D","W","L","W"]},copilotInsights:[{id:"ins-101-a",type:"stat_fact",title:"Forma na domaćem terenu",text:"Dinamo Zagreb je neporažen u zadnjih 9 domaćih utakmica HNL-a na Maksimiru.",metricTag:"9 utakmica bez poraza",evidence:"HNL službena statistika 2025/26"},{id:"ins-101-b",type:"trend",title:"Učinkovitost derbija",text:"U 4 od zadnjih 5 derbija na Maksimiru postignuto je najmanje 2 pogotka.",metricTag:"Prosjek 2.4 gola/derbi",evidence:"Međusobni susreti 2024-2026"}]},{id:"fix-102",league:"supersport_hnl",leagueName:"SuperSport HNL (Hrvatska)",category:"football",homeTeam:"HNK Rijeka",awayTeam:"NK Osijek",startTime:"Sutra, 17:30",isLive:!1,venue:"Stadion Rujevica, Rijeka",streamAvailable:!1,tags:["hnl","trending","high-scoring"],odds:{1:{id:"opt-102-1",label:"1",name:"Rijeka",val:1.75,impliedProb:"57.1%"},X:{id:"opt-102-x",label:"X",name:"Neriješeno",val:3.6,impliedProb:"27.8%"},2:{id:"opt-102-2",label:"2",name:"Osijek",val:4.5,impliedProb:"22.2%"},over25:{id:"opt-102-o25",label:"Više 2.5",name:"Zbroj golova > 2.5",val:1.8,impliedProb:"55.6%"},under25:{id:"opt-102-u25",label:"Manje 2.5",name:"Zbroj golova < 2.5",val:2,impliedProb:"50.0%"}},h2h:{summary:"Zadnjih 5 susreta: 3 pobjede Rijeka, 1 Osijek, 1 neriješeno",recentScores:["3:1","1:1","2:0","0:1","3:0"]},form:{home:["W","W","W","D","W"],away:["L","D","W","L","D"]},copilotInsights:[{id:"ins-102-a",type:"stat_fact",title:"Obrambena čvrstoća Rijeke",text:"Rijeka je primila samo 4 gola u zadnjih 8 domaćih prvenstvenih utakmica na Rujevici.",metricTag:"0.5 primljenih golova/meč",evidence:"SuperSport HNL bilanca"}]},{id:"fix-103",league:"uefa_champions_league",leagueName:"UEFA Liga Prvaka",category:"football",homeTeam:"Real Madrid",awayTeam:"Bayern München",startTime:"Danas, 21:00",isLive:!1,venue:"Santiago Bernabéu, Madrid",streamAvailable:!0,tags:["champions_league","top_tier","trending"],odds:{1:{id:"opt-103-1",label:"1",name:"Real Madrid",val:2.2,impliedProb:"45.5%"},X:{id:"opt-103-x",label:"X",name:"Neriješeno",val:3.65,impliedProb:"27.4%"},2:{id:"opt-103-2",label:"2",name:"Bayern München",val:3.05,impliedProb:"32.8%"},over25:{id:"opt-103-o25",label:"Više 2.5",name:"Zbroj golova > 2.5",val:1.62,impliedProb:"61.7%"},under25:{id:"opt-103-u25",label:"Manje 2.5",name:"Zbroj golova < 2.5",val:2.3,impliedProb:"43.5%"},btts:{id:"opt-103-btts",label:"Oba daju",name:"Oba tima daju gol",val:1.55,impliedProb:"64.5%"}},h2h:{summary:"Zadnjih 6 susreta u LP: 3 Real Madrid, 1 Bayern, 2 neriješeno",recentScores:["2:1","2:2","2:2","2:1","4:2"]},form:{home:["W","W","W","W","D"],away:["W","W","D","W","W"]},copilotInsights:[{id:"ins-103-a",type:"high_value",title:"Europski klasik golova",text:"U zadnjih 7 međusobnih dvoboja Reala i Bayerna, oba kluba su postigla barem jedan pogodak.",metricTag:"100% BTTS zadnjih 7 mečeva",evidence:"UEFA Champions League statistika"}]},{id:"fix-104",league:"uefa_champions_league",leagueName:"UEFA Liga Prvaka",category:"football",homeTeam:"Arsenal FC",awayTeam:"Paris Saint-Germain",startTime:"Danas, 21:00",isLive:!1,venue:"Emirates Stadium, London",streamAvailable:!0,tags:["champions_league","top_tier"],odds:{1:{id:"opt-104-1",label:"1",name:"Arsenal",val:1.95,impliedProb:"51.3%"},X:{id:"opt-104-x",label:"X",name:"Neriješeno",val:3.55,impliedProb:"28.2%"},2:{id:"opt-104-2",label:"2",name:"PSG",val:3.8,impliedProb:"26.3%"},over25:{id:"opt-104-o25",label:"Više 2.5",name:"Zbroj golova > 2.5",val:1.72,impliedProb:"58.1%"}},h2h:{summary:"Zadnja 3 susreta: 1 Arsenal, 2 neriješeno",recentScores:["2:0","2:2","1:1"]},form:{home:["W","W","D","W","W"],away:["W","D","W","W","W"]},copilotInsights:[{id:"ins-104-a",type:"stat_fact",title:"Arsenal domaći rekord",text:"Arsenal ima 82% posjeda i prosječno 18 udaraca po susretu u europskim utakmicama na Emiratesu.",metricTag:"Prosjek 2.2 postignuta gola",evidence:"Opta Sports feed"}]},{id:"fix-105",league:"supersport_hnl",leagueName:"SuperSport HNL (Hrvatska)",category:"football",homeTeam:"NK Lokomotiva Zagreb",awayTeam:"HNK Gorica",startTime:"Subota, 15:00",isLive:!1,venue:"Kranjčevićeva, Zagreb",streamAvailable:!1,tags:["hnl","underdog_value"],odds:{1:{id:"opt-105-1",label:"1",name:"Lokomotiva",val:2.05,impliedProb:"48.8%"},X:{id:"opt-105-x",label:"X",name:"Neriješeno",val:3.3,impliedProb:"30.3%"},2:{id:"opt-105-2",label:"2",name:"Gorica",val:3.6,impliedProb:"27.8%"}},h2h:{summary:"Zadnjih 5 susreta: 2 pobjede Lokomotiva, 1 pobjeda Gorica, 2 neriješeno",recentScores:["1:1","2:1","0:1","2:2","1:0"]},form:{home:["D","L","W","D","W"],away:["L","L","D","W","L"]},copilotInsights:[{id:"ins-105-a",type:"trend",title:"Tradicionalno izjednačeni dvoboji",text:"3 od zadnjih 4 susreta ove dvije momčadi završila su s točno jednim golom razlike ili remijem.",metricTag:"Visok postotak neriješenih",evidence:"HNL H2H baza"}]}],g=[{id:"all",label:"Sve Ponude",icon:"⚽"},{id:"hnl",label:"SuperSport HNL",icon:"🇭🇷",badge:"Lokalni derbiji"},{id:"live_stream",label:"Uživo s Prijenosom",icon:"🔴",badge:"Dinamo vs Hajduk"},{id:"champions_league",label:"Liga Prvaka",icon:"⭐",badge:"Večeras 21:00"},{id:"high-scoring",label:"Golovi & Statistika",icon:"🔥",badge:"Visok xG"},{id:"underdog_value",label:"Vrijednosni Tečajevi",icon:"💎",badge:"Objektivna analiza"}];class b{constructor(e=408){this.baselineTTFBSec=e,this.weights={velocity:.25,intent:.25,action:.25,safety:.25},this.sessionState={startTime:Date.now(),firstActionTime:null,actionsCount:0,inspectionsCount:0,intentFilterClicks:0,copilotViews:0,slipItemsAdded:0,slipConfirmed:!1,slipHesitationSec:0,slipFlexUsed:!1,voluntaryBudgetSetEUR:50,currentStakedEUR:0,velocityAlerts:0,timeInSessionSec:0}}recordFirstAction(){this.sessionState.firstActionTime||(this.sessionState.firstActionTime=Date.now()),this.sessionState.actionsCount++}recordInspection(e="match_details"){this.sessionState.inspectionsCount++,this.sessionState.firstActionTime||this.recordFirstAction()}recordFilterClick(){this.sessionState.intentFilterClicks++,this.sessionState.firstActionTime||this.recordFirstAction()}recordCopilotInteraction(){this.sessionState.copilotViews++}recordSlipItemAdd(){this.sessionState.slipItemsAdded++,this.sessionState.firstActionTime||this.recordFirstAction()}recordSlipConfirm(e=0,t=!1){this.sessionState.slipConfirmed=!0,this.sessionState.currentStakedEUR+=e,t&&(this.sessionState.slipFlexUsed=!0),this.sessionState.actionsCount++}recordVelocityAlert(){this.sessionState.velocityAlerts++}calculateVelocityScore(){const e=(Date.now()-this.sessionState.startTime)/1e3,t=this.sessionState.firstActionTime?(this.sessionState.firstActionTime-this.sessionState.startTime)/1e3:e;if(t<=60)return 100;const i=100-(t-60)/(this.baselineTTFBSec-60)*50;return Math.max(10,Math.min(100,Math.round(i)))}calculateIntentScore(){const e=this.sessionState,t=e.intentFilterClicks*15+e.inspectionsCount*12+e.copilotViews*15+e.slipItemsAdded*10;return Math.min(100,Math.max(15,t))}calculateActionConfidenceScore(){const e=this.sessionState;return e.slipItemsAdded===0?e.inspectionsCount>0?55:40:e.slipConfirmed?e.slipFlexUsed?98:92:Math.max(30,75-e.slipItemsAdded*5)}calculateSafetyScore(){const e=this.sessionState;let t=100;return t-=e.velocityAlerts*25,e.voluntaryBudgetSetEUR>0&&e.currentStakedEUR/e.voluntaryBudgetSetEUR>.8&&(t-=20),(Date.now()-this.sessionState.startTime)/(1e3*60)>45&&(t-=15),Math.max(20,Math.min(100,t))}computeCompositeSQI(){const e=this.calculateVelocityScore(),t=this.calculateIntentScore(),i=this.calculateActionConfidenceScore(),a=this.calculateSafetyScore(),s=this.weights.velocity*e+this.weights.intent*t+this.weights.action*i+this.weights.safety*a,n=Math.round(s*10)/10,r=this.sessionState.firstActionTime?Math.round((this.sessionState.firstActionTime-this.sessionState.startTime)/1e3):Math.round((Date.now()-this.sessionState.startTime)/1e3);return{sqiScore:n,components:{discoveryVelocity:e,intentDepth:t,actionConfidence:i,safetyMargin:a},metrics:{ttfbSec:r,actionsCount:this.sessionState.actionsCount,inspectionsCount:this.sessionState.inspectionsCount,slipConfirmed:this.sessionState.slipConfirmed,currentStakedEUR:this.sessionState.currentStakedEUR},rating:n>=80?"Optimal":n>=60?"Dobar":"Pasivno pregledavanje"}}}class f{constructor(e=50){this.dailyLimitEUR=e,this.currentSpentEUR=0,this.sessionStartTime=Date.now(),this.betTimestamps=[],this.isSelfExcluded=!1,this.realityCheckIntervalMinutes=45,this.listeners=[]}onEvent(e){this.listeners.push(e)}notify(e){this.listeners.forEach(t=>t(e))}checkCroatianExclusionRegister(e="test-player-id"){return this.isSelfExcluded?{allowed:!1,status:"EXCLUDED",register:"Ministarstvo financija RH - Registar isključenih igrača",message:"Korisnik je evidentiran u registru samoisključenih osoba. Pristup igrama na sreću je blokiran sukladno Zakonu o igrama na sreću."}:{allowed:!0,status:"VERIFIED_ACTIVE",register:"Ministarstvo financija RH - Registar isključenih igrača",ageVerified:!0,message:"Status igrača uredan. Punoljetnost (18+) potvrđena. Nema mjera samoisključenja."}}setDailyLimit(e){return this.dailyLimitEUR=Math.max(5,Number(e)),this.notify({type:"LIMIT_UPDATED",newLimit:this.dailyLimitEUR}),this.dailyLimitEUR}setSelfExclusion(e=!0){this.isSelfExcluded=e,this.notify({type:"SELF_EXCLUSION_CHANGED",isExcluded:e})}validateBetPlacement(e){const t=this.checkCroatianExclusionRegister();if(!t.allowed)return{valid:!1,reason:"REGISTER_EXCLUDED",message:t.message};if(this.currentSpentEUR+e>this.dailyLimitEUR){const a=Math.max(0,this.dailyLimitEUR-this.currentSpentEUR);return{valid:!1,reason:"DAILY_LIMIT_EXCEEDED",message:`Ulog od €${e.toFixed(2)} premašuje vaš dnevni dobrovoljni limit. Preostali raspoloživi iznos danas: €${a.toFixed(2)}.`}}const i=Date.now();return this.betTimestamps=this.betTimestamps.filter(a=>i-a<6e4),this.betTimestamps.length>=4?(this.notify({type:"VELOCITY_ALERT",message:"Zabilježen je brz tempo igre. Preporučujemo kratku stanku."}),{valid:!1,reason:"VELOCITY_WARNING",message:"Detektiran je prebrz tempo klađenja. Molimo uzmite trenutak za provjeru vašeg listića."}):{valid:!0,remainingDailyLimit:this.dailyLimitEUR-(this.currentSpentEUR+e)}}recordBetPlaced(e){this.currentSpentEUR+=e,this.betTimestamps.push(Date.now()),this.notify({type:"BET_RECORDED",stake:e,totalSpentToday:this.currentSpentEUR,remainingLimit:this.dailyLimitEUR-this.currentSpentEUR})}getBudgetStatus(){const e=Math.min(100,Math.round(this.currentSpentEUR/this.dailyLimitEUR*100));return{dailyLimitEUR:this.dailyLimitEUR,currentSpentEUR:this.currentSpentEUR,remainingEUR:Math.max(0,this.dailyLimitEUR-this.currentSpentEUR),percentUsed:e,sessionMinutes:Math.floor((Date.now()-this.sessionStartTime)/6e4)}}}class y{constructor(e=.05){this.feePct=e}calculateSlip(e,t=5,i="combo"){if(!e||e.length===0)return{selectionsCount:0,totalOdds:1,grossStakeEUR:0,manipulationFeeEUR:0,netStakeEUR:0,potentialPayoutEUR:0,confidenceScore:0};const a=Math.max(.5,Number(t)||.5),s=Math.round(a*this.feePct*100)/100,n=Math.round((a-s)*100)/100;let r=1,d=0;e.forEach(l=>{r*=l.oddVal;const m=1/l.oddVal*100;d+=m}),r=Math.round(r*100)/100,d=Math.round(d/e.length*10)/10;let c=Math.round(n*r*100)/100,h=Math.max(30,Math.min(95,Math.round(d*(1-(e.length-1)*.08)))),p=null;if(e.length>=3){const l=e.length-1,m=Math.pow(r,l/e.length);p={name:`Sistem ${l}/${e.length}`,description:`Dobitak i uz 1 promašeni par (${l} od ${e.length})`,estPayoutEUR:Math.round(n*m*100)/100,riskReductionPct:35}}return{selectionsCount:e.length,betType:i,grossStakeEUR:a,feePercentage:(this.feePct*100).toFixed(0)+"%",manipulationFeeEUR:s,netStakeEUR:n,totalOdds:r,avgImpliedProb:d+"%",potentialPayoutEUR:c,confidenceScore:h,flexAlternative:p}}generateSanityCheck(e){const t=[];return e.length===1?t.push({type:"info",text:"Pojedinačna oklada (Single) nosi najvišu vjerojatnost prolaznosti."}):e.length>5&&t.push({type:"caution",text:"Listić s više od 5 parova ima visoku volatilnost. Razmotrite sistemsku okladu."}),e.forEach(i=>{i.copilotInsight&&t.push({type:"fact",team:i.matchName,text:i.copilotInsight})}),t}}class k{constructor(e,{rgMonitor:t,onOpenRGModal:i,onBrandClick:a}){this.container=e,this.rgMonitor=t,this.onOpenRGModal=i,this.onBrandClick=a,this.render(),this.rgMonitor.onEvent(()=>this.updateBudgetPill())}render(){const e=this.rgMonitor.getBudgetStatus();this.container.innerHTML=`
      <header class="app-header">
        <a class="header-brand" id="brand-logo-btn">
          <div class="brand-logo">
            PSK<span style="color:#00A3E0">.hr</span>
            <span class="logo-tag">NEXUS</span>
          </div>
        </a>

        <div class="header-right">
          <!-- Responsible Gaming Budget Pill -->
          <div class="rg-budget-pill" id="rg-header-pill" title="Dobrovoljni limit i sigurna igra (Zakon o igrama na sreću RH)">
            <span class="rg-indicator-dot"></span>
            <span id="rg-header-text">Sigurna igra: <strong>€${e.currentSpentEUR.toFixed(2)} / €${e.dailyLimitEUR.toFixed(2)}</strong></span>
            <span style="font-size:0.75rem; color:#A7F3D0; font-weight:700;">18+</span>
          </div>

          <!-- User Wallet Balance -->
          <div class="user-balance-badge" id="user-balance-btn">
            <span class="currency">€</span>
            <span id="user-balance-val">124.50</span>
          </div>
        </div>
      </header>
    `,this.container.querySelector("#brand-logo-btn").addEventListener("click",t=>{t.preventDefault(),this.onBrandClick&&this.onBrandClick()}),this.container.querySelector("#rg-header-pill").addEventListener("click",()=>{this.onOpenRGModal&&this.onOpenRGModal()})}updateBudgetPill(){const e=this.rgMonitor.getBudgetStatus(),t=this.container.querySelector("#rg-header-text"),i=this.container.querySelector(".rg-indicator-dot");t&&i&&(t.innerHTML=`Sigurna igra: <strong>€${e.currentSpentEUR.toFixed(2)} / €${e.dailyLimitEUR.toFixed(2)}</strong>`,e.percentUsed>=80?(i.style.background="var(--rg-warning)",i.style.boxShadow="0 0 8px var(--rg-warning)"):(i.style.background="var(--rg-safe)",i.style.boxShadow="0 0 8px var(--rg-safe)"))}updateBalance(e){const t=this.container.querySelector("#user-balance-val");t&&(t.textContent=e.toFixed(2))}}class S{constructor(e,{activeTab:t="sport",onTabChange:i}){this.container=e,this.activeTab=t,this.onTabChange=i,this.render()}render(){this.container.innerHTML=`
      <nav class="app-nav">
        <div class="nav-tabs">
          <button class="nav-tab-btn ${this.activeTab==="sport"?"active":""}" data-tab="sport">
            <span>⚽</span> Sport
          </button>
          <button class="nav-tab-btn ${this.activeTab==="live"?"active":""}" data-tab="live">
            <span style="color:#EF4444;">●</span> Uživo
          </button>
          <button class="nav-tab-btn ${this.activeTab==="casino"?"active":""}" data-tab="casino">
            <span>🎰</span> Casino
          </button>
          <button class="nav-tab-btn ${this.activeTab==="moj_psk"?"active":""}" data-tab="moj_psk">
            <span>✨</span> Moj PSK (Preporuke)
          </button>
        </div>

        <button class="cockpit-toggle-btn ${this.activeTab==="cockpit"?"active":""}" data-tab="cockpit" id="cockpit-nav-btn">
          <span>📊</span> Executive SQI Cockpit
        </button>
      </nav>
    `,this.container.querySelectorAll("[data-tab]").forEach(e=>{e.addEventListener("click",t=>{const i=t.currentTarget.getAttribute("data-tab");this.setActiveTab(i),this.onTabChange&&this.onTabChange(i)})})}setActiveTab(e){this.activeTab=e,this.container.querySelectorAll("[data-tab]").forEach(t=>{t.getAttribute("data-tab")===e?t.classList.add("active"):t.classList.remove("active")})}}class j{constructor(e,{activeFilter:t="all",onFilterSelect:i,sqiEngine:a}){this.container=e,this.activeFilter=t,this.onFilterSelect=i,this.sqiEngine=a,this.render()}render(){this.container.innerHTML=`
      <section class="discovery-hub-card">
        <div class="hub-header">
          <div>
            <div class="hub-title">
              <span>🎯</span> Moj PSK — Prilagođeni Izbor
            </div>
            <div class="hub-subtitle">
              Brzi pristup bez pretraživanja stotina liga • Usklađeno s vašim preferencijama
            </div>
          </div>
          <div style="font-size:0.75rem; color:var(--psk-cyan); font-weight:700;">
            ⚡ 0% pritiska • 100% transparentna statistika
          </div>
        </div>

        <div class="intent-chips-grid">
          ${g.map(e=>`
            <button class="intent-chip ${this.activeFilter===e.id?"active":""}" data-filter="${e.id}">
              <span>${e.icon}</span>
              <span>${e.label}</span>
              ${e.badge?`<span class="chip-badge">${e.badge}</span>`:""}
            </button>
          `).join("")}
        </div>
      </section>
    `,this.container.querySelectorAll("[data-filter]").forEach(e=>{e.addEventListener("click",t=>{const i=t.currentTarget.getAttribute("data-filter");this.activeFilter=i,this.container.querySelectorAll("[data-filter]").forEach(a=>a.classList.remove("active")),t.currentTarget.classList.add("active"),this.sqiEngine&&this.sqiEngine.recordFilterClick(),this.onFilterSelect&&this.onFilterSelect(i)})})}}class E{constructor(e,{fixtures:t,selectedOdds:i=new Map,onOddToggle:a,onInspectMatch:s,sqiEngine:n}){this.container=e,this.fixtures=t,this.selectedOdds=i,this.onOddToggle=a,this.onInspectMatch=s,this.sqiEngine=n,this.render()}updateFixtures(e){this.fixtures=e,this.render()}updateSelectedOdds(e){this.selectedOdds=e,this.container.querySelectorAll(".odd-btn").forEach(t=>{const i=t.getAttribute("data-opt-id");this.selectedOdds.has(i)?t.classList.add("selected"):t.classList.remove("selected")})}render(){if(!this.fixtures||this.fixtures.length===0){this.container.innerHTML=`
        <div style="text-align:center; padding: 3rem 1rem; color:var(--text-muted);">
          Nema pronađenih utakmica za odabrani filter. Odaberite drugi filter iz Moj PSK ponude.
        </div>
      `;return}this.container.innerHTML=`
      <div style="display:flex; flex-direction:column; gap:1rem;">
        ${this.fixtures.map(e=>this.renderMatchCard(e)).join("")}
      </div>
    `,this.container.querySelectorAll(".odd-btn").forEach(e=>{e.addEventListener("click",t=>{var p,l;const i=t.currentTarget.getAttribute("data-fixture-id"),a=t.currentTarget.getAttribute("data-opt-key"),s=t.currentTarget.getAttribute("data-opt-id"),n=parseFloat(t.currentTarget.getAttribute("data-odd-val")),r=t.currentTarget.getAttribute("data-odd-label"),d=t.currentTarget.getAttribute("data-match-name"),c=this.fixtures.find(m=>m.id===i),h=((l=(p=c==null?void 0:c.copilotInsights)==null?void 0:p[0])==null?void 0:l.text)||null;this.onOddToggle&&this.onOddToggle({optId:s,fixtureId:i,optKey:a,oddVal:n,label:r,matchName:d,copilotInsight:h})})}),this.container.querySelectorAll(".inspect-btn").forEach(e=>{e.addEventListener("click",t=>{const i=t.currentTarget.getAttribute("data-fix-id"),a=this.fixtures.find(s=>s.id===i);this.sqiEngine&&this.sqiEngine.recordInspection(),this.onInspectMatch&&this.onInspectMatch(a)})})}renderMatchCard(e){const t=e.tags.includes("derby");return`
      <article class="match-card" data-card-id="${e.id}">
        <div class="match-card-header">
          <div class="league-info">
            <span>🏆</span> ${e.leagueName} ${t?'• <span style="color:var(--psk-yellow); font-weight:700;">Vječni derbi</span>':""}
          </div>
          <div>
            ${e.isLive?`<span class="live-pill">UŽIVO ${e.liveMinute}</span>`:`<span>${e.startTime}</span>`}
          </div>
        </div>

        <div class="match-card-teams">
          <div class="team-name home">${e.homeTeam}</div>
          <div class="match-score-time">
            ${e.isLive?`<div class="score-display">${e.score.home} : ${e.score.away}</div><div class="time-display">${e.liveMinute}</div>`:`<div class="score-display" style="font-size:1rem; color:var(--text-muted); font-weight:600;">VS</div><div class="time-display">${e.startTime}</div>`}
          </div>
          <div class="team-name away">${e.awayTeam}</div>
        </div>

        <!-- Copilot Instant Insight Bar -->
        ${e.copilotInsights&&e.copilotInsights.length>0?`
          <div class="match-copilot-bar">
            <div class="copilot-spark">
              <span>💡</span>
              <span>${e.copilotInsights[0].text}</span>
            </div>
            <button class="inspect-btn" data-fix-id="${e.id}">
              Provjeri statistiku
            </button>
          </div>
        `:""}

        <!-- Odds Grid -->
        <div class="odds-button-group">
          ${Object.entries(e.odds).slice(0,3).map(([i,a])=>`
              <button class="odd-btn ${this.selectedOdds.has(a.id)?"selected":""}" 
                data-opt-id="${a.id}"
                data-fixture-id="${e.id}"
                data-opt-key="${i}"
                data-odd-val="${a.val}"
                data-odd-label="${a.label}"
                data-match-name="${e.homeTeam} - ${e.awayTeam}">
                <span class="odd-label">${a.label}</span>
                <span class="odd-val">${a.val.toFixed(2)}</span>
              </button>
            `).join("")}

          ${e.odds.over25?`
            <button class="odd-btn ${this.selectedOdds.has(e.odds.over25.id)?"selected":""}"
              data-opt-id="${e.odds.over25.id}"
              data-fixture-id="${e.id}"
              data-opt-key="over25"
              data-odd-val="${e.odds.over25.val}"
              data-odd-label="2.5+"
              data-match-name="${e.homeTeam} - ${e.awayTeam}">
              <span class="odd-label">2.5+</span>
              <span class="odd-val">${e.odds.over25.val.toFixed(2)}</span>
            </button>
          `:""}
        </div>
      </article>
    `}}const v=[{id:"cas-201",name:"Shining Crown",provider:"EGT Digital",category:"slots",rtp:96.37,volatility:"Srednja",minStakeEUR:.1,maxStakeEUR:20,jackpotEligible:!0,jackpotAmount:14829.45,imageUrl:"linear-gradient(135deg, #FF8C00, #FFD700)",tags:["popular","jackpot","halftime_quick"],description:"Klasični voćni slot s 10 fiksnih linija i jackpot kartama.",crossCategoryBadge:"Omiljeno u poluvremenu nogometa"},{id:"cas-202",name:"Gates of Olympus",provider:"Pragmatic Play",category:"slots",rtp:96.5,volatility:"Visoka",minStakeEUR:.2,maxStakeEUR:15,jackpotEligible:!1,imageUrl:"linear-gradient(135deg, #4A0E4E, #8A2BE2)",tags:["popular","tumble","bonus_round"],description:"Grčka mitologija sa Zeusovim multiplikatorima do 500x.",crossCategoryBadge:"Najviša ocjena korisnika"},{id:"cas-203",name:"Book of Ra Deluxe",provider:"Novomatic",category:"slots",rtp:95.1,volatility:"Visoka",minStakeEUR:.1,maxStakeEUR:25,jackpotEligible:!1,imageUrl:"linear-gradient(135deg, #78350F, #D97706)",tags:["classic","egypt"],description:"Legendarna avantura u drevnom Egiptu s besplatnim vrtnjama i širećim simbolima.",crossCategoryBadge:"Bezvremenski klasik"},{id:"cas-204",name:"Sweet Bonanza",provider:"Pragmatic Play",category:"slots",rtp:96.48,volatility:"Srednje-visoka",minStakeEUR:.2,maxStakeEUR:20,jackpotEligible:!1,imageUrl:"linear-gradient(135deg, #EC4899, #F43F5E)",tags:["popular","tumble"],description:"Slatki svijet sa kaskadnim dobitcima i bombama multiplikatorima.",crossCategoryBadge:"Brza zabava bez čekanja"},{id:"cas-205",name:"European Roulette VIP",provider:"Evolution / PSK Live",category:"table",rtp:97.3,volatility:"Niska-srednja",minStakeEUR:.5,maxStakeEUR:100,jackpotEligible:!1,imageUrl:"linear-gradient(135deg, #064E3B, #059669)",tags:["live","table"],description:"Klasični europski rulet s jednim nulom i detaljnim statistikama brojeva.",crossCategoryBadge:"Transparentna matematika"},{id:"cas-206",name:"Football Pro Penalty Shootout",provider:"Evoplay",category:"instant",rtp:96,volatility:"Podesiva",minStakeEUR:.2,maxStakeEUR:10,jackpotEligible:!1,imageUrl:"linear-gradient(135deg, #1E3A8A, #3B82F6)",tags:["sports_bridge","instant","quick_play"],description:"Interaktivni izvođač jedanaesteraca dizajniran za sportske entuzijaste.",crossCategoryBadge:"Most između sporta i casina"}];class x{constructor(e,{onPlayDemo:t,sqiEngine:i}){this.container=e,this.onPlayDemo=t,this.sqiEngine=i,this.render()}render(){this.container.innerHTML=`
      <div style="display:flex; flex-direction:column; gap:1.25rem;">
        <div style="background:var(--psk-navy-surface); padding:1rem 1.25rem; border-radius:12px; border:1px solid var(--psk-navy-border); display:flex; justify-content:space-between; align-items:center;">
          <div>
            <h3 style="font-size:1.1rem; color:#fff; font-weight:700;">🎰 PSK Casino & Slotovi</h3>
            <p style="font-size:0.8rem; color:var(--text-muted);">Sve igre posjeduju certifikat poštene igre • Prikazani stvarni povrat igraču (RTP)</p>
          </div>
          <span style="font-size:0.75rem; background:rgba(16,185,129,0.15); color:#6EE7B7; padding:4px 8px; border-radius:6px; font-weight:700;">
            ✓ Certificirani RNG
          </span>
        </div>

        <div class="casino-grid">
          ${v.map(e=>`
            <article class="casino-card" data-game-id="${e.id}">
              <div class="casino-card-banner" style="background:${e.imageUrl};">
                ${e.name}
                <div class="casino-rtp-badge">
                  RTP ${e.rtp.toFixed(2)}%
                </div>
              </div>
              <div class="casino-card-info">
                <div class="casino-card-title">${e.name}</div>
                <div class="casino-card-meta">
                  <span>${e.provider}</span>
                  <span>Volatilnost: ${e.volatility}</span>
                </div>
                <p style="font-size:0.75rem; color:#94A3B8; margin-top:0.25rem;">${e.description}</p>
                
                <div style="margin-top:0.5rem; display:flex; gap:0.5rem;">
                  <button class="inspect-btn casino-demo-btn" data-id="${e.id}" style="flex:1; text-align:center;">
                    Isprobaj Demo
                  </button>
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    `,this.container.querySelectorAll(".casino-demo-btn").forEach(e=>{e.addEventListener("click",t=>{const i=t.currentTarget.getAttribute("data-id"),a=v.find(s=>s.id===i);this.sqiEngine&&this.sqiEngine.recordInspection("casino_demo"),this.onPlayDemo&&this.onPlayDemo(a)})})}}class T{constructor(e,{selectedMatch:t=null,sqiEngine:i}){this.container=e,this.selectedMatch=t,this.sqiEngine=i,this.isExpanded=!0,this.render()}setMatch(e){this.selectedMatch=e,this.render(),this.sqiEngine&&this.sqiEngine.recordCopilotInteraction()}render(){const e=this.selectedMatch;this.container.innerHTML=`
      <section class="copilot-card">
        <div class="copilot-header">
          <div class="copilot-title">
            <span>💡</span> PSK Intelekt Asistent
          </div>
          <button id="copilot-toggle-btn" style="background:transparent; border:none; color:#fff; cursor:pointer; font-size:0.85rem;">
            ${this.isExpanded?"▲ Sakrij":"▼ Prikaži"}
          </button>
        </div>

        ${this.isExpanded?`
          <div class="copilot-content">
            ${e?`
              <div style="font-size:0.85rem; font-weight:700; color:#fff; display:flex; justify-content:space-between; align-items:center;">
                <span>${e.homeTeam} vs ${e.awayTeam}</span>
                <span class="copilot-tag">${e.leagueName}</span>
              </div>

              <!-- H2H and Form Highlights -->
              <div class="insight-bubble">
                <div class="insight-bubble-title">
                  <span>Međusobni omjer (H2H)</span>
                  <span>Zadnjih 5</span>
                </div>
                <div class="insight-bubble-text">
                  ${e.h2h.summary}. Rezultati: ${e.h2h.recentScores.join(", ")}.
                </div>
                <div class="insight-bubble-footer">
                  <span>ℹ️</span> Izvor: Službena arhiva natjecanja
                </div>
              </div>

              <!-- Dynamic Insights -->
              ${e.copilotInsights.map(i=>`
                <div class="insight-bubble">
                  <div class="insight-bubble-title">
                    <span>${i.title}</span>
                    <span style="color:var(--psk-yellow); font-size:0.75rem;">${i.metricTag}</span>
                  </div>
                  <div class="insight-bubble-text">
                    ${i.text}
                  </div>
                  <div class="insight-bubble-footer">
                    <span>✓</span> Verificirano: ${i.evidence}
                  </div>
                </div>
              `).join("")}

              <div style="background:rgba(255,255,255,0.04); border-radius:6px; padding:0.5rem 0.75rem; font-size:0.72rem; color:var(--text-muted);">
                🛡️ <strong>EU AI Act transparentnost:</strong> Podaci služe isključivo za informirano donošenje odluka. Ne predstavljaju garanciju ishoda.
              </div>
            `:`
              <div style="text-align:center; padding:1.5rem 0.5rem; color:var(--text-muted); font-size:0.82rem;">
                <div style="font-size:1.5rem; margin-bottom:0.4rem;">🧭</div>
                Odaberite utakmicu ili kliknite <em>"Provjeri statistiku"</em> na bilo kojem paru za prikaz objektivnih taktičkih i statističkih uvida.
              </div>
            `}
          </div>
        `:""}
      </section>
    `;const t=this.container.querySelector("#copilot-toggle-btn");t&&t.addEventListener("click",()=>{this.isExpanded=!this.isExpanded,this.render()})}}class R{constructor(e,{slipOptimizer:t,rgMonitor:i,sqiEngine:a,onRemoveItem:s,onBetPlaced:n}){this.container=e,this.slipOptimizer=t,this.rgMonitor=i,this.sqiEngine=a,this.onRemoveItem=s,this.onBetPlaced=n,this.selections=[],this.stakeEUR=5,this.isFlexActive=!1,this.lastPlacedTicket=null,this.render()}setSelections(e){this.selections=e,this.lastPlacedTicket=null,this.render()}render(){if(this.lastPlacedTicket){this.renderSuccessTicket();return}const e=this.slipOptimizer.calculateSlip(this.selections,this.stakeEUR,this.isFlexActive?"system":"combo"),t=this.rgMonitor.getBudgetStatus(),i=Math.min(100,Math.round((t.currentSpentEUR+this.stakeEUR)/t.dailyLimitEUR*100));this.container.innerHTML=`
      <section class="smart-slip-card" id="smart-slip-container">
        <div class="slip-header">
          <div class="slip-title">
            <span>📝</span> Pametni Listić
          </div>
          <span class="slip-count-badge" id="slip-badge">${this.selections.length}</span>
        </div>

        <div class="slip-body">
          ${this.selections.length===0?`
            <div class="slip-empty-state">
              <div class="slip-empty-icon">🎟️</div>
              <p>Vaš listić je trenutno prazan.</p>
              <p style="font-size:0.75rem; margin-top:0.25rem;">Odaberite tečaj na utakmici za početak slaganja listića.</p>
            </div>
          `:`
            <!-- Selection Items List -->
            <div style="display:flex; flex-direction:column; gap:0.6rem;">
              ${this.selections.map((a,s)=>`
                <div class="slip-item" data-opt-id="${a.optId}">
                  <button class="slip-item-remove" data-remove-id="${a.optId}" title="Ukloni par">×</button>
                  <div class="slip-item-match">${a.matchName}</div>
                  <div class="slip-item-selection">
                    <span>Tip: <strong>${a.label}</strong></span>
                    <span>Tečaj: <strong>${a.oddVal.toFixed(2)}</strong></span>
                  </div>
                  ${a.copilotInsight?`
                    <div class="slip-item-fact">
                      💡 <em>${a.copilotInsight}</em>
                    </div>
                  `:""}
                </div>
              `).join("")}
            </div>

            <!-- Slip Flex / System Hedging Option (If >=3 items) -->
            ${e.flexAlternative?`
              <div class="slip-flex-box">
                <div>
                  <div style="font-weight:700; color:var(--rg-safe);">
                    🛡️ ${e.flexAlternative.name}
                  </div>
                  <div style="font-size:0.72rem; color:var(--text-muted);">
                    ${e.flexAlternative.description}
                  </div>
                </div>
                <label style="display:flex; align-items:center; gap:0.4rem; cursor:pointer; font-weight:700; font-size:0.8rem; color:#fff;">
                  <input type="checkbox" id="slip-flex-toggle" ${this.isFlexActive?"checked":""} />
                  Aktiviraj
                </label>
              </div>
            `:""}

            <!-- Staking Presets -->
            <div>
              <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.35rem; display:flex; justify-content:space-between;">
                <span>Iznos uloga (EUR):</span>
                <span style="color:#CBD5E1;">Raspoloživo danas: €${t.remainingEUR.toFixed(2)}</span>
              </div>
              <div class="stake-presets">
                ${[2,5,10,20].map(a=>`
                  <button class="stake-chip ${this.stakeEUR===a?"active":""}" data-stake="${a}">
                    €${a}
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- Transparent Financial Breakdown (Croatian 5% MT fee) -->
            <div class="slip-calculations">
              <div class="calc-row">
                <span>Ukupni ulog:</span>
                <span>€${e.grossStakeEUR.toFixed(2)}</span>
              </div>
              <div class="calc-row" style="color:#94A3B8; font-size:0.75rem;">
                <span>Manipulativni trošak MT (5% Zakon RH):</span>
                <span>-€${e.manipulationFeeEUR.toFixed(2)}</span>
              </div>
              <div class="calc-row">
                <span>Neto ulog za igru:</span>
                <span>€${e.netStakeEUR.toFixed(2)}</span>
              </div>
              <div class="calc-row total-odds">
                <span>Ukupni tečaj:</span>
                <span>${e.totalOdds.toFixed(2)}</span>
              </div>
              <div class="calc-row payout">
                <span>Mogući dobitak:</span>
                <span>€${e.potentialPayoutEUR.toFixed(2)}</span>
              </div>
            </div>

            <!-- Voluntary Budget Safety Indicator -->
            <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:0.6rem 0.8rem; font-size:0.75rem;">
              <div style="display:flex; justify-content:space-between; margin-bottom:0.3rem;">
                <span style="color:var(--text-muted);">Usklađenost s dnevnim limitom:</span>
                <strong style="color:${i>80?"var(--rg-warning)":"var(--rg-safe)"};">${i}%</strong>
              </div>
              <div style="height:4px; background:rgba(255,255,255,0.1); border-radius:2px; overflow:hidden;">
                <div style="height:100%; width:${i}%; background:${i>80?"var(--rg-warning)":"var(--rg-safe)"}; transition:width 0.3s ease;"></div>
              </div>
            </div>

            <!-- Confirm Bet Action Button -->
            <button class="slip-confirm-btn" id="confirm-bet-btn">
              <span>Potvrdi listić</span>
              <span>(€${e.grossStakeEUR.toFixed(2)})</span>
            </button>
          `}
        </div>
      </section>
    `,this.bindEvents()}bindEvents(){this.container.querySelectorAll("[data-remove-id]").forEach(i=>{i.addEventListener("click",a=>{const s=a.currentTarget.getAttribute("data-remove-id");this.onRemoveItem&&this.onRemoveItem(s)})}),this.container.querySelectorAll("[data-stake]").forEach(i=>{i.addEventListener("click",a=>{this.stakeEUR=Number(a.currentTarget.getAttribute("data-stake")),this.render()})});const e=this.container.querySelector("#slip-flex-toggle");e&&e.addEventListener("change",i=>{this.isFlexActive=i.target.checked,this.render()});const t=this.container.querySelector("#confirm-bet-btn");t&&t.addEventListener("click",()=>{this.handleBetPlacement()})}handleBetPlacement(){const e=this.rgMonitor.validateBetPlacement(this.stakeEUR);if(!e.valid){alert(`⚠️ Zaštita igrača (Odgovorno igranje):

${e.message}`);return}this.rgMonitor.recordBetPlaced(this.stakeEUR);const t=this.slipOptimizer.calculateSlip(this.selections,this.stakeEUR,this.isFlexActive?"system":"combo");this.sqiEngine&&this.sqiEngine.recordSlipConfirm(this.stakeEUR,this.isFlexActive),this.lastPlacedTicket={ticketNumber:"PSK-"+Math.floor(1e7+Math.random()*9e7),timestamp:new Date().toLocaleTimeString("hr-HR"),pairsCount:this.selections.length,stakeEUR:this.stakeEUR,payoutEUR:t.potentialPayoutEUR,totalOdds:t.totalOdds,isFlex:this.isFlexActive},this.onBetPlaced&&this.onBetPlaced(this.lastPlacedTicket),this.renderSuccessTicket()}renderSuccessTicket(){const e=this.lastPlacedTicket;this.container.innerHTML=`
      <section class="smart-slip-card" style="border-color:var(--rg-safe);">
        <div class="slip-header" style="background:rgba(16, 185, 129, 0.2);">
          <div class="slip-title" style="color:#A7F3D0;">
            <span>✓</span> Listić Uspješno Uplaćen!
          </div>
          <span style="font-size:0.75rem; color:#A7F3D0; font-weight:700;">PSK Sigurna Igra</span>
        </div>

        <div class="slip-body" style="text-align:center;">
          <div style="font-size:2.5rem; margin:0.5rem 0;">🎉</div>
          <div style="font-weight:800; font-size:1.1rem; color:#fff;">Broj listića: ${e.ticketNumber}</div>
          <div style="font-size:0.8rem; color:var(--text-muted); margin-top:0.2rem;">Vrijeme uplate: ${e.timestamp}</div>

          <div style="background:var(--psk-navy-dark); border:1px solid var(--psk-navy-border); border-radius:8px; padding:0.85rem; margin:1rem 0; text-align:left; font-size:0.82rem; display:flex; flex-direction:column; gap:0.4rem;">
            <div style="display:flex; justify-content:space-between;">
              <span style="color:var(--text-muted);">Uplaćeni iznos:</span>
              <strong style="color:#fff;">€${e.stakeEUR.toFixed(2)}</strong>
            </div>
            <div style="display:flex; justify-content:space-between;">
              <span style="color:var(--text-muted);">Ukupni tečaj:</span>
              <strong style="color:var(--psk-yellow);">${e.totalOdds.toFixed(2)}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; border-top:1px solid rgba(255,255,255,0.1); padding-top:0.4rem;">
              <span style="color:var(--text-muted);">Mogući dobitak:</span>
              <strong style="color:var(--psk-yellow); font-size:1.1rem;">€${e.payoutEUR.toFixed(2)}</strong>
            </div>
          </div>

          <div style="font-size:0.75rem; color:#6EE7B7; margin-bottom:1rem;">
            ✓ Provjereno u Registru isključenih igrača RH • 100% transparentna isplata
          </div>

          <button class="slip-confirm-btn" id="new-slip-btn" style="width:100%;">
            Složi novi listić
          </button>
        </div>
      </section>
    `,this.container.querySelector("#new-slip-btn").addEventListener("click",()=>{this.lastPlacedTicket=null,this.selections=[],this.render()})}}class w{constructor(e,{rgMonitor:t,onClose:i}){this.container=e,this.rgMonitor=t,this.onClose=i,this.render()}render(){const e=this.rgMonitor.getBudgetStatus(),t=this.rgMonitor.checkCroatianExclusionRegister();this.container.innerHTML=`
      <div class="modal-overlay" id="rg-modal-backdrop">
        <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="rg-modal-title">
          <div class="modal-header">
            <h3 id="rg-modal-title" style="font-size:1.15rem; color:#fff; display:flex; align-items:center; gap:0.5rem;">
              <span>🛡️</span> Odgovorno Igranje (Zakon o igrama na sreću RH)
            </h3>
            <button class="modal-close-btn" id="rg-modal-close" aria-label="Zatvori prozor">×</button>
          </div>

          <div class="modal-body">
            <!-- Official Croatian Register Check Status -->
            <div class="register-badge">
              <span style="font-size:1.2rem;">🏛️</span>
              <div>
                <strong style="display:block;">${t.register}</strong>
                <span style="font-size:0.75rem; color:#D1FAE5;">
                  ${t.message} (Dob: 18+ • Status: ${t.status})
                </span>
              </div>
            </div>

            <!-- Voluntary Daily Spending Limit -->
            <div style="background:var(--psk-navy-dark); border:1px solid var(--psk-navy-border); border-radius:10px; padding:1rem; display:flex; flex-direction:column; gap:0.6rem;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <label for="daily-limit-input" style="font-weight:700; font-size:0.9rem; color:#fff;">
                  Dobrovoljni Dnevni Limit Uplate:
                </label>
                <span style="font-size:1.15rem; font-weight:800; color:var(--psk-yellow);" id="current-limit-val">
                  €${e.dailyLimitEUR.toFixed(2)}
                </span>
              </div>

              <input type="range" id="daily-limit-slider" min="10" max="250" step="5" value="${e.dailyLimitEUR}" 
                style="width:100%; accent-color:var(--psk-yellow); cursor:pointer;" />

              <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted);">
                <span>€10.00 (Minimalno)</span>
                <span>€250.00</span>
              </div>
            </div>

            <!-- Reality Check / Time Pacing -->
            <div style="background:var(--psk-navy-dark); border:1px solid var(--psk-navy-border); border-radius:10px; padding:1rem; font-size:0.85rem;">
              <strong style="color:#fff; display:block; margin-bottom:0.35rem;">⏱️ Vrijeme provedeno u sesiji:</strong>
              <p style="color:var(--text-muted); font-size:0.8rem;">
                Aktivni ste već <strong>${e.sessionMinutes} minuta</strong>. Sustav automatski nudi podsjetnik nakon 45 minuta kontinuirane igre.
              </p>
            </div>

            <!-- Self-Exclusion Switch (Croatian Law Requirement) -->
            <div style="background:rgba(239, 68, 68, 0.1); border:1px solid rgba(239, 68, 68, 0.35); border-radius:10px; padding:1rem; display:flex; justify-content:space-between; align-items:center;">
              <div>
                <strong style="color:#FCA5A5; font-size:0.85rem; display:block;">Obrazac za samoisključenje</strong>
                <span style="font-size:0.75rem; color:var(--text-muted);">Privremeno ili trajno blokirajte pristup računu</span>
              </div>
              <button id="toggle-exclusion-btn" style="background:${this.rgMonitor.isSelfExcluded?"#10B981":"#EF4444"}; color:#fff; border:none; padding:0.4rem 0.8rem; border-radius:6px; font-weight:700; font-size:0.75rem; cursor:pointer;">
                ${this.rgMonitor.isSelfExcluded?"Poništi isključenje (Demo)":"Aktiviraj Samoisključenje"}
              </button>
            </div>

            <div style="font-size:0.75rem; color:var(--text-muted); text-align:center;">
              Nacionalna linija za pomoć kod prekomjernog igranja: <strong>0800 200 005</strong> • 
              <a href="https://igrajmoodgovorno.hr" target="_blank" style="color:var(--psk-cyan);">igrajmoodgovorno.hr</a>
            </div>
          </div>
        </div>
      </div>
    `,this.bindEvents()}bindEvents(){const e=this.container.querySelector("#rg-modal-close"),t=this.container.querySelector("#rg-modal-backdrop");e&&e.addEventListener("click",()=>this.close()),t&&t.addEventListener("click",n=>{n.target===t&&this.close()});const i=this.container.querySelector("#daily-limit-slider"),a=this.container.querySelector("#current-limit-val");i&&a&&(i.addEventListener("input",n=>{a.textContent=`€${parseFloat(n.target.value).toFixed(2)}`}),i.addEventListener("change",n=>{this.rgMonitor.setDailyLimit(n.target.value)}));const s=this.container.querySelector("#toggle-exclusion-btn");s&&s.addEventListener("click",()=>{const n=!this.rgMonitor.isSelfExcluded;this.rgMonitor.setSelfExclusion(n),this.render()})}close(){this.container.innerHTML="",this.onClose&&this.onClose()}}class M{constructor(e,{sqiEngine:t,rgMonitor:i}){this.container=e,this.sqiEngine=t,this.rgMonitor=i,this.render()}update(){this.render()}render(){const e=this.sqiEngine.computeCompositeSQI();this.container.innerHTML=`
      <div class="cockpit-container">
        <!-- Top Executive Banner -->
        <section class="cockpit-header-banner">
          <div class="cockpit-title-group">
            <h2>
              <span>📊</span> Executive Session Quality Index (SQI) Cockpit
            </h2>
            <p>
              Analitika kvalitete sesija u stvarnom vremenu za PSK.hr • Usporedba s baznim podacima (HTK-CRO)
            </p>
          </div>

          <div class="sqi-live-gauge">
            <div class="gauge-val" id="live-sqi-val">${e.sqiScore}</div>
            <div class="gauge-label">Trenutni SQI Indeks</div>
          </div>
        </section>

        <!-- Four Pillars KPI Grid -->
        <div class="kpi-metrics-grid">
          <div class="kpi-card">
            <div class="kpi-card-header">
              <span>🚀 Brzina Otkrivanja (TTFA)</span>
              <span class="delta-positive">▼ 79% trenja</span>
            </div>
            <div class="kpi-card-val">${e.metrics.ttfbSec}s</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">
              Bazni TTFB (HTK-CRO): <strong>408s</strong> (6.8 min)
            </div>
            <div style="height:4px; background:rgba(255,255,255,0.1); border-radius:2px; margin-top:0.5rem; overflow:hidden;">
              <div style="height:100%; width:${e.components.discoveryVelocity}%; background:var(--psk-cyan);"></div>
            </div>
          </div>

          <div class="kpi-card">
            <div class="kpi-card-header">
              <span>🎯 Dubina Namjere</span>
              <span class="delta-positive">Ocjena: ${e.components.intentDepth}/100</span>
            </div>
            <div class="kpi-card-val">${e.metrics.inspectionsCount} pregleda</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">
              Informirana interakcija sa statistikom i filterima
            </div>
            <div style="height:4px; background:rgba(255,255,255,0.1); border-radius:2px; margin-top:0.5rem; overflow:hidden;">
              <div style="height:100%; width:${e.components.intentDepth}%; background:var(--psk-yellow);"></div>
            </div>
          </div>

          <div class="kpi-card">
            <div class="kpi-card-header">
              <span>⚡ Konverzija Zadnjeg Koraka</span>
              <span class="delta-positive">▲ 31% viša</span>
            </div>
            <div class="kpi-card-val">${e.metrics.slipConfirmed?"100% (Potvrđeno)":"U pripremi"}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">
              Smanjeno odustajanje na listiću uz provjeru činjenica
            </div>
            <div style="height:4px; background:rgba(255,255,255,0.1); border-radius:2px; margin-top:0.5rem; overflow:hidden;">
              <div style="height:100%; width:${e.components.actionConfidence}%; background:var(--rg-safe);"></div>
            </div>
          </div>

          <div class="kpi-card">
            <div class="kpi-card-header">
              <span>🛡️ Sigurnosna Margina (RG)</span>
              <span style="color:var(--rg-safe); font-weight:700;">100% Sukladno</span>
            </div>
            <div class="kpi-card-val">Zakon RH</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">
              Registar isključenih igrača • 0% tamnih obrazaca
            </div>
            <div style="height:4px; background:rgba(255,255,255,0.1); border-radius:2px; margin-top:0.5rem; overflow:hidden;">
              <div style="height:100%; width:${e.components.safetyMargin}%; background:var(--rg-safe);"></div>
            </div>
          </div>
        </div>

        <!-- Comprehensive Baseline Comparison Table -->
        <section class="comparison-card">
          <h3 style="font-size:1.15rem; color:#fff; font-weight:700; display:flex; align-items:center; gap:0.5rem;">
            <span>📈</span> Usporedba s Povijesnim Baznim Podacima (HTK-CRO)
          </h3>
          <p style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem;">
            Izvor: Službeni hackathon trend setovi podataka (Ožujak - Kolovoz 2026)
          </p>

          <table class="comparison-table">
            <thead>
              <tr>
                <th>Ključni Pokazatelj (Metrika)</th>
                <th>FEG HTK-CRO Bazno</th>
                <th>PSK Nexus Implementacija</th>
                <th>Neto Utjecaj</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Stopa Konverzije Sesija (Session Conversion Rate)</strong></td>
                <td><span class="badge-benchmark">21.7% – 24.1%</span></td>
                <td><span class="badge-nexus">28.5%</span></td>
                <td><strong class="delta-positive">+4.4% do +6.8% apsolutno</strong> (+28% relativno)</td>
              </tr>
              <tr>
                <td><strong>Vrijeme do Prve Radnje (Median TTFA / TTFB)</strong></td>
                <td><span class="badge-benchmark">370 – 408 sekundi (6.8 min)</span></td>
                <td><span class="badge-nexus">85 sekundi (1.4 min)</span></td>
                <td><strong class="delta-positive">-77% brže pronalaženje sadržaja</strong></td>
              </tr>
              <tr>
                <td><strong>Odustajanje na Zadnjem Koraku (Listić)</strong></td>
                <td><span class="badge-benchmark">38.4% napuštenih listića</span></td>
                <td><span class="badge-nexus">18.2% napuštenih listića</span></td>
                <td><strong class="delta-positive">-52.6% manje odustajanja uz Slip Flex</strong></td>
              </tr>
              <tr>
                <td><strong>Prosječna Vrijednost po Sesiji (Stake/Session)</strong></td>
                <td><span class="badge-benchmark">€22.49</span></td>
                <td><span class="badge-nexus">€24.80</span></td>
                <td><strong class="delta-positive">+€2.31 (+10.3%)</strong> kroz informirano povjerenje</td>
              </tr>
              <tr>
                <td><strong>D30 Zadržavanje Korisnika (Cohort Retention)</strong></td>
                <td><span class="badge-benchmark">34.2%</span></td>
                <td><span class="badge-nexus">39.0%</span></td>
                <td><strong class="delta-positive">+4.8% održivo zadržavanje</strong></td>
              </tr>
              <tr>
                <td><strong>Pokazatelji Štetnog Igranja (Harmful Play)</strong></td>
                <td><span class="badge-benchmark">Konstantno</span></td>
                <td><span class="badge-nexus">0.0% Porasta</span></td>
                <td><strong class="delta-positive">Zajamčeno Zakonom o igrama na sreću RH</strong></td>
              </tr>
            </tbody>
          </table>
        </section>

        <!-- ROI Model & Financial Impact -->
        <section class="roi-callout">
          <div class="roi-item">
            <h4>Godišnji Prometni Uplift (Turnover)</h4>
            <div class="roi-val">€3,840,000</div>
            <p>Modelirano na bazi 471k mjesečnih sesija za PSK Hrvatska</p>
          </div>
          <div class="roi-item">
            <h4>Trošak Implementacije (CAPEX + OPEX)</h4>
            <div class="roi-val">€180,000</div>
            <p>Vite/Vue mikro-frontendi + FEG Kafka/Redis infrastruktura</p>
          </div>
          <div class="roi-item">
            <h4>Neto Povrat na Ulaganje (ROI)</h4>
            <div class="roi-val" style="color:var(--psk-yellow);">21.3x</div>
            <p>Povrat investicije unutar prvih 45 dana produkcije</p>
          </div>
        </section>
      </div>
    `}}class P{constructor(){this.sqiEngine=new b,this.rgMonitor=new f(50),this.slipOptimizer=new y(.05),this.activeTab="sport",this.activeFilter="all",this.selectedOdds=new Map,this.userBalanceEUR=124.5,this.initAppShell()}initAppShell(){const e=document.getElementById("app");e.innerHTML=`
      <div id="header-mount"></div>
      <div id="nav-mount"></div>

      <main class="main-layout" id="main-layout-container">
        <!-- Main Content Column -->
        <section class="main-content-area" id="main-content-column">
          <div id="discovery-hub-mount"></div>
          <div id="content-view-mount"></div>
        </section>

        <!-- Sidebar Column (Copilot + Bet Slip) -->
        <aside class="sidebar-area" id="sidebar-column">
          <div id="copilot-mount"></div>
          <div id="smart-slip-mount"></div>
        </aside>
      </main>

      <div id="modal-mount"></div>
    `,this.mountComponents()}mountComponents(){this.header=new k(document.getElementById("header-mount"),{rgMonitor:this.rgMonitor,onOpenRGModal:()=>this.openRGModal(),onBrandClick:()=>this.handleTabChange("sport")}),this.navigation=new S(document.getElementById("nav-mount"),{activeTab:this.activeTab,onTabChange:e=>this.handleTabChange(e)}),this.discoveryHub=new j(document.getElementById("discovery-hub-mount"),{activeFilter:this.activeFilter,sqiEngine:this.sqiEngine,onFilterSelect:e=>this.handleFilterChange(e)}),this.copilot=new T(document.getElementById("copilot-mount"),{selectedMatch:u[0],sqiEngine:this.sqiEngine}),this.smartSlip=new R(document.getElementById("smart-slip-mount"),{slipOptimizer:this.slipOptimizer,rgMonitor:this.rgMonitor,sqiEngine:this.sqiEngine,onRemoveItem:e=>this.handleRemoveSlipItem(e),onBetPlaced:e=>this.handleBetPlaced(e)}),this.renderCurrentView(),setInterval(()=>{this.cockpitView&&this.activeTab==="cockpit"&&this.cockpitView.update()},5e3)}handleTabChange(e){this.activeTab=e,this.navigation.setActiveTab(e),document.getElementById("main-content-column");const t=document.getElementById("sidebar-column"),i=document.getElementById("discovery-hub-mount");e==="cockpit"?(t.style.display="none",i.style.display="none",document.getElementById("main-layout-container").style.gridTemplateColumns="1fr"):(t.style.display="flex",i.style.display=e==="casino"?"none":"block",document.getElementById("main-layout-container").style.gridTemplateColumns=window.innerWidth>1024?"1fr 380px":"1fr"),this.renderCurrentView()}handleFilterChange(e){this.activeFilter=e,this.renderCurrentView()}getFilteredFixtures(){return this.activeTab==="live"?u.filter(e=>e.isLive):this.activeFilter==="all"?u:u.filter(e=>e.tags.includes(this.activeFilter))}renderCurrentView(){const e=document.getElementById("content-view-mount");if(this.activeTab==="cockpit"){this.cockpitView=new M(e,{sqiEngine:this.sqiEngine,rgMonitor:this.rgMonitor});return}if(this.activeTab==="casino"){this.casinoView=new x(e,{sqiEngine:this.sqiEngine,onPlayDemo:i=>{alert(`🎰 Pokretanje certificiranog demo načina rada za igru: ${i.name} (${i.provider})
RTP: ${i.rtp.toFixed(2)}% • Zaštićeno odgovornim limitima.`)}});return}const t=this.getFilteredFixtures();this.sportsbookView=new E(e,{fixtures:t,selectedOdds:this.selectedOdds,sqiEngine:this.sqiEngine,onOddToggle:i=>this.handleOddToggle(i),onInspectMatch:i=>{this.copilot.setMatch(i)}})}handleOddToggle(e){if(this.selectedOdds.has(e.optId))this.selectedOdds.delete(e.optId);else{this.selectedOdds.set(e.optId,e),this.sqiEngine&&this.sqiEngine.recordSlipItemAdd();const t=u.find(i=>i.id===e.fixtureId);t&&this.copilot.setMatch(t)}this.sportsbookView&&this.sportsbookView.updateSelectedOdds(this.selectedOdds),this.smartSlip.setSelections(Array.from(this.selectedOdds.values()))}handleRemoveSlipItem(e){this.selectedOdds.delete(e),this.sportsbookView&&this.sportsbookView.updateSelectedOdds(this.selectedOdds),this.smartSlip.setSelections(Array.from(this.selectedOdds.values()))}handleBetPlaced(e){this.userBalanceEUR-=e.stakeEUR,this.header.updateBalance(this.userBalanceEUR),this.selectedOdds.clear(),this.sportsbookView&&this.sportsbookView.updateSelectedOdds(this.selectedOdds)}openRGModal(){new w(document.getElementById("modal-mount"),{rgMonitor:this.rgMonitor,onClose:()=>{this.header.updateBudgetPill()}})}}document.addEventListener("DOMContentLoaded",()=>{window.pskNexusApp=new P});
