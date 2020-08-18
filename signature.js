    let retry = (fn,retry,maxAttempts)=>new Promise((resolve,reject)=>{
        let error = null
        let temp = ()=>{
            if(maxAttempts<=0) reject(error)
            else{
                fn().then((r)=>{
                    console.log(r)
                    resolve(r)
                }).catch(err=>{
                    error = err
                    maxAttempts--
                    setTimeout(()=>{
                        temp()
                    },retry)
                    
                })
            }
            
        }
        temp()
    })
    
    const fn = ()=>new Promise((resolve,reject)=>{
       let r = Math.floor((Math.random() * 10 )+1)
       if(r >5) resolve(r)
       else reject(r)
    })
    
    retry(fn,1000,5).then(data=>{
        console.log("success")
    }).catch(err=>{
    })
