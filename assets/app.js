(function(){
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const YEAR=new Date().getFullYear(), SINCE=YEAR-1788;
const S={
 nature:["Nature, 2017","https://doi.org/10.1038/nature22968"],
 pnas:["PNAS, 2018","https://doi.org/10.1073/pnas.1808385115"],
 muru:["UNESCO: Murujuga","https://whc.unesco.org/en/list/1709/"],
 nmaMungo:["National Museum of Australia","https://www.nma.gov.au/defining-moments/resources/mungo-lady"],
 adb:["Australian Dictionary of Biography","https://adb.anu.edu.au/biography/mungo-man-27704"],
 will:["UNESCO: Willandra Lakes","https://whc.unesco.org/en/list/167/"],
 am:["Australian Museum","https://australian.museum/learn/australia-over-time/extinct-animals/diprotodon-optatum/"],
 tas:["National Museum of Australia","https://www.nma.gov.au/defining-moments/resources/separation-of-tasmania"],
 williams:["Quaternary Science Reviews, 2018","https://doi.org/10.1016/j.quascirev.2017.11.030"],
 conv:["The Conversation, 2018","https://theconversation.com/australias-coastal-living-is-at-risk-from-sea-level-rise-but-its-happened-before-87686"],
 finch:["Nature Human Behaviour, 2021","https://doi.org/10.1038/s41562-020-01041-0"],
 unimelb:["University of Melbourne, 2021","https://www.unimelb.edu.au/newsroom/news/2021/february/australias-oldest-rock-painting-is-a-kangaroo"],
 bb:["UNESCO: Budj Bim","https://whc.unesco.org/en/list/1577/"],
 fleet:["National Museum of Australia","https://digital-classroom.nma.gov.au/defining-moments/first-fleet-arrives-sydney-cove"]
};
const btns=a=>`<p class="src-btns">${a.map(k=>`<a class="src-btn" href="${S[k][1]}" target="_blank" rel="noopener">${S[k][0]} ↗</a>`).join('')}</p>`;
const photo=(src,alt,cap)=>({src,alt,cap});
const STOPS=[
 {ka:65,when:"At least 65,000 years ago",title:"Madjedbebe",draft:1,draw:"shelter",
  text:["Madjedbebe is a rock shelter on Mirarr Country in Arnhem Land.","Scientists dug deep into the sand. They found stone tools, grinding stones and ochre.","In 2017 they said people were living there about 65,000 years ago."],
  more:["Other scientists looked at the same evidence in 2018. They think people came to this part of the world about 50,000 to 55,000 years ago.","The scientists thanked the Mirarr Traditional Owners for letting them do the work."],
  cap:"Drawing, not a picture of the real place. Deeper sand is older.",src:["nature","pnas"]},
 {ka:50,when:"At least 50,000 years",title:"Murujuga",draft:1,img:photo("assets/img/murujuga-nganjarli.jpg","Red rocks piled on a hillside at Nganjarli, Murujuga.","Rocks at Nganjarli, Murujuga. Photo: The editor next door, CC0, via Wikimedia Commons."),
  text:["Murujuga is on the coast of Western Australia. Its red rocks hold one to two million carvings, called petroglyphs.","UNESCO says Ngarda-Ngarli have used and cared for this land and sea for at least 50,000 years."],
  more:["Some carvings show animals that no longer live there.","Murujuga became a World Heritage place in 2025."],src:["muru"]},
 {ka:42,when:"40,000 to 42,000 years ago",title:"Lake Mungo",draft:1,img:photo("assets/img/mungo-walls-of-china.jpg","Pale sand cliffs at sunset at Lake Mungo.","The Walls of China at Lake Mungo. Photo: Kevinzoo45, CC BY-SA 4.0, via Wikimedia Commons."),
  text:["Lake Mungo is a dry lake in south-western New South Wales.","In 1968 and 1974 a scientist, Jim Bowler, found where two people had been buried long ago.","They lived 40,000 to 42,000 years ago. They are the oldest human remains found in Australia."],
  more:["They are known as Mungo Lady and Mungo Man. Both have now been returned to Country, to the Paakantji, Ngiyampaa and Mutthi Mutthi peoples.","This card names people who have died. It shows no pictures of them."],src:["nmaMungo","adb","will"]},
 {ka:25,when:"About 25,000 years ago",title:"Giant animals",img:photo("assets/img/diprotodon-genyornis.jpg","Museum skeleton casts of a Diprotodon and a giant bird, Genyornis.","Casts of Diprotodon (front) and Genyornis skeletons in a museum. Photo: David Jackmanson, CC BY 4.0, via Wikimedia Commons."),
  text:["Giant animals called megafauna once lived here.","Diprotodon was the biggest marsupial ever. It weighed up to 2,700 kilograms.","It lived alongside people for thousands of years. The Australian Museum says it died out about 25,000 years ago."],
  more:["Scientists still argue about why the giant animals died out. Changes in climate, and people, may both have played a part."],src:["am"]},
 {ka:20,when:"About 20,000 years ago",title:"Footprints in the clay",draft:1,draw:"foot",
  text:["Near Lake Mungo, nearly 460 old footprints were found in 2003.","They are about 20,000 years old."],cap:"Drawing, not the real footprints.",src:["nmaMungo"]},
 {ka:18,when:"The last Ice Age",title:"The sea is low",draw:"ice",map:1,
  text:["In the Ice Age, lots of sea water was frozen into ice.","The sea was about 120 metres lower than today.","Australia, New Guinea and Tasmania were one big land. Scientists call it Sahul.","From about 18,000 years ago, the ice melted and the sea began to rise."],src:["tas","conv"]},
 {ka:18,when:"About 17,300 years ago",title:"A painted kangaroo",draft:1,draw:"wasp",
  text:["On Balanggarra Country in the Kimberley, a kangaroo about 2 metres long is painted on the ceiling of a rock shelter.","Scientists dated old mud-wasp nests under the paint and on top of it.","The painting is about 17,300 years old. It is the oldest dated rock painting found in Australia so far."],
  more:["The painting is not shown here. The Balanggarra Traditional Owners asked that the exact places are not published."],cap:"Diagram of how the painting was dated. The painting must be younger than the nest under it, and older than the nest on top.",src:["finch","unimelb"]},
 {ka:12,when:"About 12,000 years ago",title:"Tasmania becomes an island",draft:1,mini:"tas",
  text:["People walked to Tasmania about 40,000 years ago.","As the sea rose, it covered the land in between. By about 12,000 years ago Tasmania was an island.","Tasmania is known as Lutruwita by First Nations peoples from there."],cap:"Pale: land in the Ice Age. Dark: land today.",src:["tas"]},
 {ka:8,when:"About 8,000 years ago",title:"New Guinea is cut off",mini:"ng",
  text:["The sea kept rising.","About 8,000 years ago it covered the land between Cape York and New Guinea. The tops of the hills became the Torres Strait Islands."],cap:"Pale: land in the Ice Age. Dark: land today.",src:["williams","conv"]},
 {ka:7,when:"At least 6,600 years",title:"Budj Bim eel traps",draft:1,img:photo("assets/img/budj-bim-lake-surprise.jpg","A lake surrounded by trees and rocks at Budj Bim.","Lake Surprise, at Budj Bim, Victoria. Photo: Dhx1, CC0, via Wikimedia Commons."),draw2:"eel",
  text:["Budj Bim is on Gunditjmara Country in south-west Victoria. Long ago its lava made fields of rock.","For at least 6,600 years, the Gunditjmara built stone channels, weirs and ponds there to catch and keep eels, called kooyang.","It is one of the oldest fish-farming systems in the world. It became a World Heritage place in 2019."],
  more:["One part is Tae Rak, also called Lake Condah. It was drained in the 1950s. In 2010 a cultural weir was built and the water came back.","UNESCO writes: “For the Gunditjmara, deep time refers to the idea that they have always been there.”"],
  cap2:"Simple drawing of how a stone eel trap works.",src:["bb"]}
];
const pic=s=>s.img?`<button type="button" class="pic zoom" data-full="${s.img.src}" data-cap="${s.img.cap}"><img src="${s.img.src}" alt="${s.img.alt}" loading="lazy"></button><p class="cap">${s.img.cap} Tap to enlarge.</p>`
 :s.draw?`<div class="pic draw">${ART[s.draw]}</div><p class="cap">${s.cap||''}</p>`
 :s.mini?`<div class="pic draw">${mini(s.mini)}</div><p class="cap">${s.cap}</p>`:'';
function mini(which){const m=window.SAHUL;const vb=which==='tas'?'440 730 260 170':'440 160 260 230';
 return `<svg viewBox="${vb}" role="img" aria-label="${which==='tas'?'Map of Victoria and Tasmania':'Map of Cape York and New Guinea'}: pale land in the Ice Age, dark land today."><rect x="0" y="0" width="900" height="900" fill="#bfe0ea"/><path d="${m['-120']}" fill="#efd6a4"/><path d="${m['0']}" fill="#8b5a2e"/></svg>`;}
function card(s){return `<div class="card" id="stop-${s.title.toLowerCase().replace(/[^a-z]+/g,'-')}"><span class="when">${s.when}</span>${pic(s)}<div class="inner">${s.draft?'<span class="draft">Draft, pending consultation</span>':''}<h3>${s.title}</h3>${s.text.map(t=>`<p>${t}</p>`).join('')}
 ${s.draw2?`<div class="pic draw" style="border-radius:12px;overflow:hidden">${ART[s.draw2]}</div><p class="cap" style="padding-left:0">${s.cap2}</p>`:''}
 ${s.more?`<details class="more"><summary>More</summary>${s.more.map(t=>`<p>${t}</p>`).join('')}</details>`:''}
 ${s.map?`<p><a class="btn alt" href="#map" data-goto-sec="map">See the land shrink on the map</a></p>`:''}
 ${btns(s.src)}</div></div>`;}
// ribbon
function buildRibbon(){const ol=$('#ribbon');let h='';
 for(let ka=65;ka>=1;ka--){const st=STOPS.filter(s=>s.ka===ka);const five=ka%5===0;
  h+=`<li class="row${five?' five':''}" data-ka="${ka}"><div class="band" style="background:${band(ka)}"></div><span class="lbl">${five||st.length||ka===1?ka.toLocaleString('en-AU')+',000 years ago':''}</span></li>`;
  st.forEach(s=>h+=`<li class="stop" data-ka="${ka}"><div class="band" style="background:${band(ka)}"></div>${card(s)}</li>`);}
 const p=(y)=>((y-(YEAR-1000))/1000*100).toFixed(2);
 h+=`<li class="last-step" id="last-step" data-ka="0"><div class="card"><span class="when">The last step: from 1,000 years ago to today</span><div class="inner"><h3>Zoom in on the last step</h3><p>This bar is just one step: 1,000 years. The British ships are right at the end.</p>
 <div class="zoombar" role="img" aria-label="A bar for the last 1,000 years, with marks near the end for 1616, 1770 and 1788.">
 <div class="mk" style="left:0"><span class="dn" style="transform:translateX(-10%)">${YEAR-1000}</span></div>
 <div class="mk" style="left:${p(1616)}%"><span class="up">1616</span></div>
 <div class="mk" style="left:${p(1770)}%"><span class="dn" style="transform:translateX(calc(-100% - 4px))">1770</span></div>
 <div class="mk red" style="left:${p(1788)}%"><span class="up" style="transform:translate(4px,-4px)">1788</span></div>
 <div class="mk" style="left:100%"><span class="dn" style="transform:translateX(-90%)">${YEAR}</span></div></div>
 <div class="pic draw" style="border-radius:12px;overflow:hidden;max-width:420px">${ART.ship}</div><p class="cap" style="padding-left:0">Drawing of a sailing ship.</p>
 <p><b>1616:</b> a Dutch ship, the Eendracht, leaves a plate at Shark Bay, on Malgana Country.</p>
 <p><b>1770:</b> James Cook’s ship, the Endeavour, sails up the east coast.</p>
 <p><b>1788:</b> eleven British ships, the First Fleet, arrive. On 26 January 1788 they start a convict settlement at Sydney Cove, on the land of the Eora people.</p>
 <p class="bigfact">From 1788 to ${YEAR} is ${SINCE} years.</p>
 ${btns(['fleet'])}<p class="small">For 1616 and 1770, see the Before the Ships investigation.</p></div></div></li>`;
 ol.innerHTML=h;
 const counter=$('#counter b'),step=$('#counter small'),items=$$('#ribbon > li');let tick=false;
 const upd=()=>{tick=false;const line=$('.counter').getBoundingClientRect().bottom+10;let cur=items[0];
  for(const li of items){if(li.getBoundingClientRect().top<=line)cur=li;else break;}
  const ka=+cur.dataset.ka;
  if(ka===0){counter.textContent='The last 1,000 years';step.textContent='Step 65 of 65';}
  else{counter.textContent='About '+ka.toLocaleString('en-AU')+',000 years ago';step.textContent='Step '+(66-ka)+' of 65';}};
 window.addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(upd);}},{passive:true});}
function band(ka){const c=['#5e3018','#8b4a26','#a8693a','#c98f4c','#e2b46e'];return c[Math.min(4,Math.floor((65-ka)/13))];}
// scale
let mode='steps',total=65000;
function scale(){const v=$('#scale-view');const n=total/1000,frac=SINCE/1000;
 const tot=total.toLocaleString('en-AU');
 if(mode==='steps'){v.innerHTML=`<p>Each square is one step. Each step is 1,000 years. That makes ${n} steps.</p>
  <div class="steps-grid" role="img" aria-label="${n} squares. Only a thin red sliver of the last square is the time since 1788.">${Array.from({length:n},(_,i)=>i===n-1?`<span class="last"><i style="width:${(frac*100).toFixed(1)}%"></i></span>`:'<span></span>').join('')}</div>
  <p class="bigfact">From 1788 to now is the thin red sliver at the end. It is less than a quarter of one step.</p>`;}
 else if(mode==='day'){const secs=SINCE/total*86400;const rs=Math.round(secs),m=Math.floor(rs/60),s=rs%60;const at=new Date(2000,0,1,24,0,0)-secs*1000;const t=new Date(at);
  const hh=t.getHours()%12||12,mm=String(t.getMinutes()).padStart(2,'0');
  v.innerHTML=`<p>Squeeze all ${tot} years into one day, from midnight to midnight.</p>
  <div class="daybar" role="img" aria-label="A bar for one whole day. The time since 1788 is a thin red line at the very end."><span class="t" style="left:2%">midnight</span><span class="t" style="left:50%">midday</span><span class="t" style="left:96%">midnight</span><div class="slv" style="width:${(SINCE/total*100).toFixed(2)}%"></div></div>
  <p class="bigfact">The First Fleet would arrive at about ${hh}:${mm} pm, only ${m} minutes and ${s} seconds before the end of the day.</p>`;}
 else{const cm=Math.round(SINCE/total*n*100);
  v.innerHTML=`<p>Walk ${n} metres. Each metre is 1,000 years.</p><div class="walkbar" style="background:repeating-linear-gradient(90deg,#e2b46e 0 calc(100%/${n} - 1px),#c98f4c calc(100%/${n} - 1px) calc(100%/${n}))" role="img" aria-label="A ${n} metre path. Only the last ${cm} centimetres are red."><div class="slv" style="width:${(SINCE/total*100).toFixed(2)}%"></div></div>
  <p class="bigfact">From 1788 to now is only the last ${cm} centimetres. A school ruler is 30 centimetres long.</p>`;}
}
function initScale(){$$('.scale-tabs button').forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.mode;$$('.scale-tabs button').forEach(x=>x.setAttribute('aria-pressed',x===b));scale();}));
 $('#use50').addEventListener('change',e=>{total=e.target.checked?50000:65000;scale();});scale();}
// map
const FR=[['-120','The last Ice Age','The sea is about 120 metres lower. Australia, New Guinea and Tasmania are one land: Sahul.'],
 ['-60','The ice melts','The sea starts to rise and covers the edges of the land.'],
 ['-18','About 12,000 years ago','Tasmania becomes an island.'],
 ['-4','About 8,000 years ago','New Guinea is cut off.'],
 ['0','Today','The coast we know now.']];
function initMap(){const m=window.SAHUL,svg=$('#mapsvg');
 const PIN={'Madjedbebe':[12,-10],'Murujuga':[14,8],'Lake Mungo':[-150,-12],'Budj Bim':[-120,22],'Kimberley':[-30,-16]};
 svg.setAttribute('viewBox',`0 0 ${m.w} ${m.h}`);
 svg.innerHTML=`<rect width="${m.w}" height="${m.h}" fill="#bfe0ea"/>`+FR.map((f,i)=>`<path class="land" data-i="${i}" d="${m[f[0]]}" fill="#c98f4c" opacity="${i?0:1}"/>`).join('')
  +`<path class="today" d="${m['0']}"/>`
  +Object.entries(PIN).map(([n,[dx,dy]])=>{const [x,y]=m.pts[n];return `<g class="pin"><circle cx="${x}" cy="${y}" r="9"/><text x="${x+dx}" y="${y+dy}">${n}</text></g>`}).join('')
  +`<text x="20" y="40" font-family="system-ui" font-size="22" fill="#33585f">Islands of Asia</text>`;
 const r=$('#mapr'),lbl=$('#maplbl');
 const show=i=>{$$('.land',svg).forEach(p=>p.setAttribute('opacity',+p.dataset.i===i?1:0));lbl.innerHTML=`<b>${FR[i][1]}.</b> ${FR[i][2]}`;r.value=i;r.setAttribute('aria-valuetext',FR[i][1]);};
 r.addEventListener('input',()=>show(+r.value));let t=null;
 $('#mapplay').addEventListener('click',e=>{if(t){clearInterval(t);t=null;e.target.textContent='▶ Play';return;}let i=0;show(0);e.target.textContent='■ Stop';t=setInterval(()=>{i++;if(i>4){clearInterval(t);t=null;e.target.textContent='▶ Play';return;}show(i);},1700);});
 show(0);}
// tabs
function goto(id,push=true){const p=$('#'+id);if(!p)return;$$('.panel').forEach(x=>x.classList.toggle('on',x===p));$$('.tabs button').forEach(b=>b.setAttribute('aria-selected',b.dataset.tab===id));if(push)history.replaceState(null,'','#'+id);window.scrollTo({top:$('.tabs').offsetTop-4});}
function initTabs(){$$('.tabs button').forEach(b=>b.addEventListener('click',()=>goto(b.dataset.tab)));
 document.addEventListener('click',e=>{const a=e.target.closest('[data-goto]');if(a){e.preventDefault();goto(a.dataset.goto);}
  const s=e.target.closest('[data-goto-sec]');if(s){e.preventDefault();goto('read');setTimeout(()=>$('#'+s.dataset.gotoSec).scrollIntoView({behavior:'smooth'}),60);}
  const z=e.target.closest('.zoom');if(z){e.preventDefault();lb(z.dataset.full,z.dataset.cap||'');}});
 const h=location.hash.slice(1);const map={map:'read',ribbon:'read'};if(h&&$('#'+(map[h]||h))?.classList.contains('panel'))goto(map[h]||h,false);}
// lightbox
function lb(src,cap){const L=$('#lb');$('img',L).src=src;$('p',L).textContent=cap;L.classList.add('on');$('button',L).focus();}
function initLb(){const L=$('#lb');const close=()=>L.classList.remove('on');$('button',L).addEventListener('click',close);L.addEventListener('click',e=>{if(e.target===L)close();});document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});}
// storage
const KEY='deep-time-v1';
function initStore(){let d={};try{d=JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){}
 $$('[data-key]').forEach(el=>{if(d[el.dataset.key]!=null)el.value=d[el.dataset.key];el.addEventListener('input',()=>{d[el.dataset.key]=el.value;localStorage.setItem(KEY,JSON.stringify(d));});});
 $$('input[name=finding]').forEach(r=>{if(d.finding===r.value)r.checked=true;r.addEventListener('change',()=>{d.finding=r.value;localStorage.setItem(KEY,JSON.stringify(d));});});
 $('#clear').addEventListener('click',()=>{if(confirm('Clear all my answers?')){localStorage.removeItem(KEY);d={};$$('[data-key]').forEach(el=>el.value='');$$('input[name=finding]').forEach(r=>r.checked=false);}});
 $$('[data-print]').forEach(b=>b.addEventListener('click',()=>{const p=$('#'+b.dataset.print);p.classList.add('print');window.print();setTimeout(()=>p.classList.remove('print'),500);}));}
$$('.year-now').forEach(e=>e.textContent=YEAR);$$('.since-now').forEach(e=>e.textContent=SINCE);
buildRibbon();initScale();initMap();initTabs();initLb();initStore();
$('#jump-end').addEventListener('click',()=>$('#last-step').scrollIntoView({behavior:'smooth'}));
})();
