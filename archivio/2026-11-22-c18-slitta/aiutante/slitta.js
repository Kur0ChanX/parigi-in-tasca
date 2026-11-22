/* ---------- slitta volante della testata ----------
   Snippet #slitta nella scena: 6 s dopo l'apertura e poi ogni 40–70 s attraversa il cielo davanti alla luna
   (da destra o da sinistra), lascia cadere 3–5 regali che svaniscono prima dei tetti.
   Si muove un solo gruppo (transform) più i regali (transform + opacità); ferma se la scheda è nascosta,
   aspetta se la testata non si vede, mai con «riduci movimento». slVai() la fa partire subito (prove). */
(()=>{
 const slG=document.getElementById('slitta'),slSvg=slG&&slG.ownerSVGElement;
 if(!slSvg||!window.requestAnimationFrame)return;
 const slMq=matchMedia('(prefers-reduced-motion: reduce)');
 if(slMq.matches)return;
 const slVolo=slG.querySelector('.sl-volo'),slVolo2=slG.querySelector('.sl-volo2'),slDoni=[...slG.querySelectorAll('.sl-dono')];
 const SL_LUNA=[240,70],SL_G=58,SL_SACCO=[73,-21];
 let slP=null,slRaf=0,slLast=0,slTo=0,slAlle=0,slResto=-1,slVista=true,slAttesa=false,slFermo=false,slRimV=-1;
 const slMulb=a=>()=>{a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
 const slClamp=(v,a,b)=>v<a?a:v>b?b:v;
 /* la parte della scena che si vede davvero (viewBox 800×290, xMidYMax slice): [x sinistra, x destra, y in alto] */
 const slFinestra=()=>{const r=slSvg.getBoundingClientRect();if(!r.width||!r.height)return [0,800,0];
  const sc=Math.max(r.width/800,r.height/290),w=r.width/sc,h=r.height/sc;return [Math.max(0,400-w/2),Math.min(800,400+w/2),Math.max(0,290-h)]};
 /* il giro: x a velocità costante, y su un arco (parabola per 3 punti) che passa davanti alla luna */
 const slPiano=o=>{
  const rnd=o.seme!=null?slMulb(o.seme):Math.random,R=(a,b)=>a+rnd()*(b-a);
  const dir=o.dir===1||o.dir===-1?o.dir:(rnd()<.62?-1:1);
  const [x0,x1,yv]=slFinestra(),dur=o.durata||R(9,12);
  const xa=dir<0?x1+112:x0-112,xb=dir<0?x0-112:x1+112;
  const sc=u=>.8+.14*Math.sin(Math.PI*slClamp(u,0,1));
  /* punto del disegno che passa sulla luna: verso sinistra la seconda renna, verso destra il conducente */
  const lp=dir<0?[-48,-15]:[38,-16];
  let s=1,mx=0;for(let k=0;k<3;k++){mx=SL_LUNA[0]+dir*lp[0]*s;s=sc((mx-xa)/(xb-xa))}
  /* se lo schermo taglia il cielo in alto (PC basso e largo), l'arco si abbassa quel tanto che basta: le corna restano in vista */
  const my=Math.max(SL_LUNA[1]-lp[1]*s+R(-3,3),yv+4+46*s),ya=R(98,108),yb=Math.max(R(46,58),yv+4+46*sc(1));
  const L=(x,a,b,c)=>(x-b)*(x-c)/((a-b)*(a-c));
  const yx=x=>ya*L(x,xa,mx,xb)+my*L(x,mx,xa,xb)+yb*L(x,xb,xa,mx);
  let top=1e9;for(let i=0;i<=40;i++){const u=i/40,x=xa+(xb-xa)*u;top=Math.min(top,yx(x)-48*sc(u))}
  const off=Math.max(0,yv+6-top);
  const p={dir,dur,xa,xb,sc,yx,off,ph:R(0,6.3),t:0,tLuna:(mx-xa)/(xb-xa)*dur,doni:[]};
  /* regali: partono quando il pentolone è in vista, cadono con un po' della spinta della slitta */
  let ua=1,ub=0;for(let i=0;i<=100;i++){const u=i/100,x=xa+(xb-xa)*u-dir*SL_SACCO[0]*sc(u);if(x>x0+14&&x<x1-14){ua=Math.min(ua,u);ub=Math.max(ub,u)}}
  if(ub>ua){const n=3+Math.floor(rnd()*3),k=[...slDoni.keys()].sort(()=>rnd()-.5);
   for(let i=0;i<n&&i<slDoni.length;i++){const tr=(ua+(ub-ua)*(.1+.72*(i+R(.15,.85))/n))*dur,q=slPosa(p,tr),c=Math.cos(q.a),si=Math.sin(q.a);
    const lx=SL_SACCO[0]*-dir*q.s,ly=SL_SACCO[1]*q.s,x=q.x+c*lx-si*ly,y=q.y+si*lx+c*ly;
    const vy=R(-10,-4),yEnd=Math.min(178,y+115),life=(-vy+Math.sqrt(vy*vy+2*SL_G*(yEnd-y)))/SL_G;
    p.doni.push({el:slDoni[k[i]],tr,x,y,vx:(xb-xa)/dur*R(.35,.6),vy,yEnd,yF:y+22,life,r0:R(-30,30),w:R(90,200)*(rnd()<.5?-1:1),s:q.s})}}
  p.fine=Math.max(dur,...p.doni.map(d=>d.tr+d.life))+.05;
  return p};
 /* posizione della slitta al tempo t: centro, angolo (radianti), scala, opacità */
 const slPosa=(p,t)=>{const u=t/p.dur,x=p.xa+(p.xb-p.xa)*u,h=.4,sl=(p.yx(x+h)-p.yx(x-h))/(2*h);
  return {x,y:p.yx(x)+p.off+2.2*Math.sin(t*3.7+p.ph),a:(slClamp(Math.atan(sl)*57.3,-12,12)+1.3*Math.cos(t*3.7+p.ph))/57.3,s:p.sc(u),o:.62+.32*Math.sin(Math.PI*slClamp(u,0,1))}};
 const slDisegna=(p,t)=>{const q=slPosa(p,t);
  const tf=`translate(${q.x.toFixed(1)} ${q.y.toFixed(1)}) rotate(${(q.a*57.3).toFixed(2)}) scale(${(-p.dir*q.s).toFixed(3)} ${q.s.toFixed(3)})`,op=q.o.toFixed(2);
  slVolo.setAttribute('transform',tf);slVolo.setAttribute('opacity',op);
  /* la copia in controluce si muove sempre insieme (zampe allineate); la maschera la fa vedere solo sul disco della luna */
  slVolo2.setAttribute('transform',tf);slVolo2.setAttribute('opacity',op);
  const d=Math.abs(q.x+p.dir*8*q.s-SL_LUNA[0]),rim=Math.round((.5+.5*Math.exp(-(d/70)*(d/70)))*20)/20;
  if(rim!==slRimV){slRimV=rim;slG.style.setProperty('--sl-rim',rim)}
  for(const g of p.doni){const tau=t-g.tr;
   if(tau<0||tau>g.life){if(g.on){g.on=false;g.el.setAttribute('opacity','0')}continue}
   g.on=true;const y=g.y+g.vy*tau+.5*SL_G*tau*tau,x=g.x+g.vx*(1-Math.exp(-1.3*tau))/1.3;
   const a=Math.min(1,tau/.15)*slClamp((g.yEnd-y)/(g.yEnd-g.yF),0,1);
   g.el.setAttribute('transform',`translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${(g.r0+g.w*tau).toFixed(1)}) scale(${g.s.toFixed(2)})`);
   g.el.setAttribute('opacity',a.toFixed(2))}};
 const slFrame=now=>{slRaf=0;if(!slP)return;slP.t+=Math.min(.05,(now-slLast)/1000);slLast=now;
  if(slP.t>=slP.fine){slFine();return}slDisegna(slP,slP.t);slRaf=requestAnimationFrame(slFrame)};
 const slStop=()=>{cancelAnimationFrame(slRaf);slRaf=0;slP=null;slG.classList.remove('sl-on');slDoni.forEach(d=>d.setAttribute('opacity','0'))};
 const slProgramma=ms=>{clearTimeout(slTo);slAlle=performance.now()+ms;slTo=setTimeout(slTocca,ms)};
 const slFine=()=>{slStop();if(!slFermo)slProgramma(40000+Math.random()*30000)};
 const slTocca=()=>{slTo=0;if(slFermo||slP)return;if(document.hidden||!slVista){slAttesa=true;return}slVai()};
 /* slVai(): parte subito. Prove: slVai({dir:-1|1, seme:7, ferma:0.5|'luna'}) disegna un attimo fermo e spegne i giri automatici */
 const slVai=(o={})=>{if(slMq.matches)return null;slStop();slP=slPiano(o);slG.classList.add('sl-on');
  if(o.ferma!=null){slFermo=true;clearTimeout(slTo);slP.t=o.ferma==='luna'?slP.tLuna:o.ferma*slP.dur;slDisegna(slP,slP.t);return slP}
  slDisegna(slP,0);slLast=performance.now();slRaf=requestAnimationFrame(slFrame);return slP};
 document.addEventListener('visibilitychange',()=>{
  if(document.hidden){cancelAnimationFrame(slRaf);slRaf=0;if(slTo){clearTimeout(slTo);slTo=0;slResto=Math.max(0,slAlle-performance.now())}return}
  if(slResto>=0){slProgramma(slResto);slResto=-1}
  if(slP&&!slRaf&&!slFermo){slLast=performance.now();slRaf=requestAnimationFrame(slFrame)}
  if(slAttesa&&slVista){slAttesa=false;slProgramma(1200)}});
 if('IntersectionObserver' in window)new IntersectionObserver(e=>{slVista=e[e.length-1].isIntersecting;
  if(slVista&&slAttesa&&!document.hidden){slAttesa=false;slProgramma(1200)}}).observe(slSvg);
 const slSpegni=()=>{if(slMq.matches){slFermo=true;clearTimeout(slTo);slStop()}};
 if(slMq.addEventListener)slMq.addEventListener('change',slSpegni);else if(slMq.addListener)slMq.addListener(slSpegni);
 const slAvvia=()=>slProgramma(6000);
 if(document.readyState==='complete')slAvvia();else addEventListener('load',slAvvia,{once:true});
 window.slVai=slVai;
})();
