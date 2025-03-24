/*
    ajax_get封装
    + 请求参数
        => @params { string } url 请求地址
        => @params { string } querystr 请求参数
        => @params { function } success 请求成功时的回调
        => @params { function } error 请求失败时的回调
*/
function ajax_get(options){
    const xhr = new XMLHttpRequest()
    if(options.querystr){
        let str = '?'
        for(let key in options.querystr){
            str += `${key}=${options.querystr[key]}&`
        }
        str = str.slice(0, -1)
        xhr.open('get', options.url+str)
    }else{
        xhr.open('get', options.url)
    }
    if(options.token){
        xhr.setRequestHeader('authorization', 'Bearer'+options.token)
    }
    xhr.onreadystatechange = ()=> {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                options.success && options.success(xhr.responseText)
            }else{
                options.error && options.error()
            }
        }
    }
    xhr.send()
}

/*
    ajax_post封装
    + 请求参数
        => @params { string } url 请求地址
        => @params { string } querystr 请求参数
        => @params { function } success 请求成功时的回调
        => @params { function } error 请求失败时的回调
*/
function ajax_post(options){
    const xhr = new XMLHttpRequest()
    xhr.open('post', options.url)
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    xhr.onreadystatechange = ()=> {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                options.success && options.success(xhr.responseText)
            }else{
                options.error && options.error()
            }
        }
    }
    if(options.querystr){
        let str = ''
        for(let key in options.querystr){
            str += `${key}=${options.querystr[key]}&`
        }
        str = str.slice(0, -1)
        xhr.send(str)
    }else{
        xhr.send()
    }
}

function pAjax(options){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest()
        if(options.querystr){
            let str = '?'
            for(let key in options.querystr){
                str += `${key}=${options.querystr[key]}&`
            }
            str = str.slice(0, -1)
            xhr.open('get', options.url+str)
        }else{
            xhr.open('get', options.url)
        }
        if(options.token){
            xhr.setRequestHeader('authorization', 'Bearer'+options.token)
        }
        xhr.onreadystatechange = ()=> {
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(xhr.responseText)
                }else{
                    reject()
                }
            }
        }
        xhr.send()
    })
}