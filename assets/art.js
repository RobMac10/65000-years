/* Drawn illustrations for this app. Simple diagrams only: no people, no copies of any rock art. */
window.ART={
shelter:`<svg viewBox="0 0 400 240" role="img" aria-label="Drawing: a rock shelter with layers of sand underneath. Deeper layers are older."><rect width="400" height="240" fill="#fdf6e8"/>
<path d="M0 0H400V70Q330 52 270 86Q200 120 120 96Q60 78 0 92Z" fill="#9a5b32"/><path d="M0 0H400V40Q320 30 260 58Q190 90 110 66Q50 50 0 62Z" fill="#7a4424"/>
<path d="M0 132H400V240H0Z" fill="#e8c48a"/><path d="M0 160H400V240H0Z" fill="#d7a764"/><path d="M0 188H400V240H0Z" fill="#c08445"/><path d="M0 214H400V240H0Z" fill="#9c6232"/>
<path d="M150 125 l10 -8 l9 8 z" fill="#5a4a3a"/><path d="M250 178 l12 -6 l6 9 z" fill="#5a4a3a"/><ellipse cx="300" cy="204" rx="11" ry="5" fill="#a33a2a"/><path d="M90 226 l12 -7 l10 8z" fill="#3d3128"/>
<g font-family="system-ui" font-size="13" font-weight="700" fill="#3d2a1c"><text x="10" y="150">newer</text><text x="10" y="232" fill="#fff">older</text></g>
<path d="M375 140V228" stroke="#3d2a1c" stroke-width="3" marker-end="url(#a)"/><defs><marker id="a" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#3d2a1c"/></marker></defs>
<text x="384" y="136" text-anchor="end" font-family="system-ui" font-size="12" font-weight="700" fill="#3d2a1c">deeper</text></svg>`,
foot:`<svg viewBox="0 0 400 220" role="img" aria-label="Drawing: a trail of footprints pressed into clay."><rect width="400" height="220" fill="#e9dcc3"/><path d="M0 170Q120 150 230 176T400 160V220H0Z" fill="#d9c6a2"/>
<g fill="#8a6a4a">${[[40,150,-20],[90,120,-15],[140,140,-10],[190,105,-8],[240,122,-4],[290,86,0],[340,100,4]].map(([x,y,r],i)=>`<g transform="translate(${x} ${y}) rotate(${r+ (i%2?8:-8)})"><ellipse rx="10" ry="19"/><circle cx="-6" cy="-24" r="3.2"/><circle cx="0" cy="-26" r="3.2"/><circle cx="6" cy="-24" r="3"/><circle cx="10" cy="-20" r="2.6"/></g>`).join('')}</g></svg>`,
ice:`<svg viewBox="0 0 400 230" role="img" aria-label="Drawing: a coast. Today the sea is high. In the Ice Age the sea was about 120 metres lower, so much more land was dry."><rect width="400" height="230" fill="#fdf6e8"/>
<rect y="70" width="400" height="160" fill="#bfe0ea"/><rect y="168" width="400" height="62" fill="#7fb6c8"/>
<path d="M0 40H120Q170 44 200 80Q250 130 300 168Q340 196 400 200V230H0Z" fill="#c9965a"/>
<line x1="0" y1="70" x2="400" y2="70" stroke="#1d3b4a" stroke-width="2.5" stroke-dasharray="7 5"/><line x1="0" y1="168" x2="400" y2="168" stroke="#1d3b4a" stroke-width="2.5" stroke-dasharray="7 5"/>
<g font-family="system-ui" font-weight="700" font-size="14" fill="#1d3b4a"><text x="392" y="62" text-anchor="end">Sea today</text><text x="392" y="190" text-anchor="end">Ice Age sea, about 120 m lower</text></g>
<path d="M230 76V160" stroke="#b3261e" stroke-width="3" marker-start="url(#u)" marker-end="url(#u)"/><defs><marker id="u" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#b3261e"/></marker></defs>
<text x="40" y="120" font-family="system-ui" font-size="13" font-weight="700" fill="#4a2e1b">dry land then,</text><text x="40" y="137" font-family="system-ui" font-size="13" font-weight="700" fill="#4a2e1b">under the sea now</text></svg>`,
wasp:`<svg viewBox="0 0 400 230" role="img" aria-label="Diagram: an old wasp nest under a painting, the painting, and a newer wasp nest on top. Dating both nests shows the painting's age is in between. The painting itself is not shown."><rect width="400" height="230" fill="#f1e2c8"/>
<rect x="30" y="150" width="340" height="50" rx="8" fill="#b9874f"/><text x="200" y="181" text-anchor="middle" font-family="system-ui" font-size="15" font-weight="700" fill="#fff">older wasp nest (underneath)</text>
<rect x="30" y="96" width="340" height="46" rx="8" fill="#fff" stroke="#b3261e" stroke-width="3" stroke-dasharray="8 5"/><text x="200" y="125" text-anchor="middle" font-family="system-ui" font-size="15" font-weight="700" fill="#b3261e">painting (not shown)</text>
<rect x="30" y="40" width="340" height="48" rx="8" fill="#8f6236"/><text x="200" y="70" text-anchor="middle" font-family="system-ui" font-size="15" font-weight="700" fill="#fff">newer wasp nest (on top)</text>
<text x="200" y="222" text-anchor="middle" font-family="system-ui" font-size="13" fill="#4a2e1b">rock wall</text></svg>`,
eel:`<svg viewBox="0 0 400 240" role="img" aria-label="Simple diagram of a stone eel trap: water flows along a channel through stone walls to a gap, where a woven basket catches the eel."><rect width="400" height="240" fill="#e8efe2"/>
<path d="M0 95Q100 80 200 104T400 98V146Q300 150 200 140T0 150Z" fill="#7fb6c8"/>
${Array.from({length:18},(_,i)=>`<ellipse cx="${10+i*22}" cy="${86+((i*37)%9)}" rx="12" ry="8" fill="#6b6762"/><ellipse cx="${14+i*22}" cy="${156+((i*23)%9)}" rx="12" ry="8" fill="#6b6762"/>`).join('')}
<g fill="#6b6762">${[0,1,2,3,4].map(i=>`<ellipse cx="250" cy="${96+i*12}" rx="9" ry="7"/>`).join('')}</g>
<rect x="244" y="112" width="14" height="10" fill="#7fb6c8"/>
<path d="M258 108 L300 112 Q312 117 300 122 L258 126 Z" fill="#c9a36a" stroke="#8a6a3a" stroke-width="2"/><path d="M266 109V125M276 110V124M286 111V123M296 112V122" stroke="#8a6a3a" stroke-width="1.5"/>
<path d="M150 118 q12 -8 24 0 t24 0 t20 2" stroke="#3d3a2a" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M40 122 H110" stroke="#1d3b4a" stroke-width="2.5" marker-end="url(#f)"/><defs><marker id="f" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#1d3b4a"/></marker></defs>
<g font-family="system-ui" font-size="13" font-weight="700" fill="#2b2a24"><text x="10" y="40">stone walls of lava rock</text><text x="40" y="200">water flows along a channel</text><text x="150" y="102">kooyang (eel)</text><text x="300" y="150">woven basket</text><text x="214" y="225">stone weir with a gap</text></g>
<path d="M300 140 L292 126" stroke="#2b2a24" stroke-width="1.5"/><path d="M250 214 L250 160" stroke="#2b2a24" stroke-width="1.5"/></svg>`,
ship:`<svg viewBox="0 0 400 200" role="img" aria-label="Drawing: a sailing ship."><rect width="400" height="200" fill="#dfeef2"/><rect y="150" width="400" height="50" fill="#7fb6c8"/>
<path d="M110 140H300L280 168H130Z" fill="#4a2e1b"/><path d="M200 40V140M150 60V140M250 60V140" stroke="#4a2e1b" stroke-width="4"/>
<path d="M160 50H240L234 96H166Z M170 100H230L226 132H174Z M120 70H180L176 104H124Z M220 70H280L276 104H224Z" fill="#f7f0e3" stroke="#8a7a62" stroke-width="2"/></svg>`
};
