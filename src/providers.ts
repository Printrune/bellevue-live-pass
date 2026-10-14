import {offers,quote,remaining,packages,type State,type Offer,type Item,type Package} from './domain';
// Real providers must preserve supplier confirmations, rights and explicit purchase consent.
export interface EventProvider {search(query:string):Promise<Offer[]>}
export interface AvailabilityProvider {remaining(id:string,state:State):Promise<number>}
export interface BookingProvider {confirm(item:Item,consent:boolean):Promise<{reference:string}>}
export interface PaymentProvider {authorize(amount:number,consent:boolean):Promise<{simulation:boolean}>}
export interface PromotionProvider {quote:typeof quote}
export interface RewardsProvider {eligible(state:State,rule:string):Promise<boolean>}
export interface TransitProvider {journey(origin:string,destination:string):Promise<{legs:string[];simulated:boolean}>}
export interface MediaProvider {rights(eventId:string):Promise<{live:boolean;replay:boolean;simulation:boolean}>}
export interface AIProvider {plan(party:number,wants:{hotel:boolean;dinner:boolean;water:boolean;rail:boolean}):Promise<Package[]>}
export const demoProviders={events:{search:async(q:string)=>offers.filter(x=>x.title.toLowerCase().includes(q.toLowerCase()))} satisfies EventProvider,availability:{remaining:async(id:string,s:State)=>remaining(s,id)} satisfies AvailabilityProvider,ai:{plan:async(party:number,wants:{hotel:boolean;dinner:boolean;water:boolean;rail:boolean})=>packages(party,wants)} satisfies AIProvider,media:{rights:async()=>({live:false,replay:false,simulation:true})} satisfies MediaProvider};
