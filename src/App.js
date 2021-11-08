import React from "react";
import Card from "./components/Card";
import "./App.css";



function App(){
  const free={
    title:"FREE",
    price:"0",
    user:"Single User",
    userEnabler:true,
    storage:"5GB Storage",
    storageEnabler:true,
    pub_project:"Unlimited Public Project",
    pub_projectEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    private_project:"Unlimited Private Project",
    private_projectEnabler:false,
    phonesupport:"Dedicated Phone Support",
    phonesupportEnabler:false,
    subdomin:"Free Subdomin",
    subdominEnabler:false,
    report:"Monthly status Report",
    reportEnabler:false


  }
  const plus={
    title:"PLUS",
    price:"9",
    user:"5 User",
    userEnabler:true,
    storage:"50GB storage",
    storageEnabler:true,
    pub_project:"Unlimited Public Project",
    pub_projectEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    private_project:"Unlimited Private Project",
    private_projectEnabler:true,
    phonesupport:"Dedicated Phone Support",
    phonesupportEnabler:true,
    subdomin:"Free Subdomin",
    subdominEnabler:true,
    report:"Monthly status Report",
    reportEnabler:false


  }
  const pro={
    title:"PRO",
    price:"50",
    user:"Unlimited User",
    userEnabler:true,
    storage:"Unlimited Storage",
    storageEnabler:true,
    pub_project:"Unlimited Public Project",
    pub_projectEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    private_project:"Unlimited Private Project",
    private_projectEnabler:true,
    phonesupport:"Dedicated Phone Support",
    phonesupportEnabler:true,
    subdominprefix:"Unlimited",
    subdomin:"Free Subdomin",
    subdominEnabler:true,
    report:"Monthly status Report",
    reportEnabler:true


  }
 
  return(
    <section class="pricing py-5">
    <div class="container">
      <div class="row">
         <Card type={free}/>
         <Card type={plus}/>
         <Card type={pro}/>
      </div>
    </div>
  </section>
  )
  }



export default App;