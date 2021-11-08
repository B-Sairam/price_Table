
function Card(props){


  return(
   <>
   <div class="col-lg-4">
          <div class="card mb-5 mb-lg-0">
            <div class="card-body">
              <h5 class="card-title text-warning  text-uppercase text-center">{props.type.title}</h5>
              <h6 class="card-price text-center">${props.type.price}<span class="period">/month</span></h6>
              <hr/>
              <ul class="fa-ul">
                <li><span class="fa-li"><i class={props.type.userEnabler? "fas fa-check":"fas fa-times"}></i></span>{props.type.title=="FREE"? <>{props.type.user}</>:<b>{props.type.user}</b>}</li>
                <li><span class="fa-li"><i class={props.type.storageEnabler? "fas fa-check":"fas fa-times"}></i></span>{props.type.storage}</li>
                <li><span class="fa-li"><i class={props.type.pub_projectEnabler? "fas fa-check":"fas fa-times"}></i></span>{props.type.pub_project}</li>
                <li><span class="fa-li"><i class={props.type.communityAccessEnabler? "fas fa-check":"fas fa-times"}></i></span>{props.type.communityAccess}</li>
                <li class={props.type.private_projectEnabler?"":"text-muted"} ><span class="fa-li"><i class={props.type.private_projectEnabler? "fas fa-check":"fas fa-times"}></i></span>{props.type.private_project}</li>
                <li class ={props.type.phonesupportEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.phonesupportEnabler? "fas fa-check":"fas fa-times"}></i></span>{props.type.phonesupport}</li>
                <li class ={props.type.subdominEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.subdominEnabler? "fas fa-check":"fas fa-times"}></i></span><b>{props.type.subdominprefix}</b> {props.type.subdomin}
                </li>
                <li class={props.type.reportEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type. reportEnabler? "fas fa-check":"fas fa-times"}></i></span>{props.type.report}</li>
              </ul>
              <div class="d-grid">
                <a href="#" class="btn btn-warning text-uppercase">Button</a>
              </div>
            </div>
          </div>
        </div>
   </>
    
    
  )
}
export default Card