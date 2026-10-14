import {siteUrl} from './site-url';
import {useEffect,useRef,useState,type CSSProperties} from 'react';
import {ArrowLeft,ArrowUpRight,BatteryFull,Compass,Crown,Gift,Radio,RotateCcw,Signal,Smartphone,Sparkles,Ticket,TrainFront,Wifi} from 'lucide-react';
import type {State} from './domain';
import './simulator.css';

const devices={
  compact:{name:'Compact',width:360,height:740},
  standard:{name:'Standard',width:390,height:844},
  large:{name:'Large',width:430,height:932}
};
const journeys=[
  {screen:'home',name:'Explore',detail:'Find your next experience',Icon:Compass},
  {screen:'event',name:'Tickets',detail:'Try an event purchase',Icon:Ticket},
  {screen:'planner',name:'Plan with AI',detail:'Build a complete visit',Icon:Sparkles},
  {screen:'plans',name:'My Plans',detail:'Bring your bookings together',Icon:Ticket},
  {screen:'rewards',name:'Rewards',detail:'Discover your benefits',Icon:Gift},
  {screen:'navigate',name:'Transportation',detail:'Plan arrival and return',Icon:TrainFront},
  {screen:'vip',name:'VIP',detail:'Explore premium experiences',Icon:Crown},
  {screen:'live',name:'Live',detail:'Step inside the event',Icon:Radio}
];

export default function AppSimulator({theme,onExit}:{theme:State['theme'];onExit:()=>void}){
  const [device,setDevice]=useState<keyof typeof devices>('standard');
  const [screen,setScreen]=useState('home');
  const [revision,setRevision]=useState(0);
  const [scale,setScale]=useState(1);
  const [ready,setReady]=useState(false);
  const [notice,setNotice]=useState('');
  const stage=useRef<HTMLDivElement>(null);
  const size=devices[device];
  useEffect(()=>{
    const element=stage.current;if(!element)return;
    const observer=new ResizeObserver(([entry])=>setScale(Math.min(1,(entry.contentRect.width-24)/(size.width+24))));
    observer.observe(element);return()=>observer.disconnect();
  },[size.width]);
  const src=siteUrl(`?concept=${theme}&screen=${screen}&simulator=1`);
  function launch(next:string){setReady(false);setScreen(next);setRevision(v=>v+1);setNotice('');stage.current?.scrollIntoView({block:'start',behavior:'instant'});}
  function reset(){
    try{localStorage.removeItem('blp-simulator-v1');launch('home');setNotice('Simulator reset. Your main-site plans are unchanged.');}
    catch{setNotice('Browser storage is unavailable. Reopen the simulator to start a new preview.');}
  }
  const frameStyle={width:size.width+24,height:size.height+78,transform:`scale(${scale})`} as CSSProperties;
  return <div className="app-simulator">
    <div className="simulator-heading"><div><p className="eyebrow">YOUR PASS. IN YOUR POCKET.</p><h1>Try the app.</h1><p className="subhead">Your next great experience, one tap away.</p></div><button className="btn secondary" onClick={onExit}><ArrowLeft size={17}/>Back to website</button></div>
    <div className="simulator-layout">
      <aside className="simulator-controls" aria-label="App simulator controls">
        <div className="simulator-intro"><span className="simulator-symbol"><Smartphone size={25}/></span><div><h2>Take it for a spin.</h2><p>Tap, scroll, explore, and try a booking inside the phone.</p></div></div>
        <fieldset className="simulator-devices"><legend>Phone size</legend><div>{Object.entries(devices).map(([key,value])=><button key={key} aria-pressed={device===key} onClick={()=>setDevice(key as keyof typeof devices)}><Smartphone size={17}/><strong>{value.name}</strong><small>{value.width} × {value.height}</small></button>)}</div></fieldset>
        <div className="simulator-journeys"><h3>Jump into an experience</h3><div>{journeys.map(({screen:next,name,detail,Icon})=><button key={next} onClick={()=>launch(next)}><Icon size={19}/><span><strong>{name}</strong><small>{detail}</small></span><ArrowUpRight size={15}/></button>)}</div></div>
        <div className="simulator-note"><p>Everything here is a demonstration. Simulator plans stay separate from your main-site plans.</p><button className="text-button" onClick={reset}><RotateCcw size={16}/>Reset simulator</button><p role="status" className="simulator-notice">{notice}</p></div>
      </aside>
      <div className="simulator-stage" ref={stage}>
        <div className="simulator-stage-label"><span className="status-dot"/>INTERACTIVE APP PREVIEW</div>
        <div className="simulator-device-space" style={{width:(size.width+24)*scale,height:(size.height+78)*scale}}>
          <div className="simulator-device" style={frameStyle}>
            <div className="simulator-statusbar" aria-hidden="true"><span>9:41</span><i/><span><Signal size={14}/><Wifi size={14}/><BatteryFull size={19}/></span></div>
            {!ready&&<div className="simulator-loading" role="status"><Smartphone size={28}/><span>Opening your app…</span></div>}
            <iframe key={`${screen}-${revision}`} src={src} title="Bellevue Live Pass interactive app simulator" width={size.width} height={size.height} onLoad={()=>setReady(true)}/>
            <div className="simulator-home-indicator" aria-hidden="true"><span/></div>
          </div>
        </div>
        <p className="simulator-caption">Interactive web preview · {size.name} phone · Scroll inside the screen</p>
      </div>
    </div>
  </div>;
}
