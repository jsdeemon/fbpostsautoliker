/* 
Facebook posts liker 
--------------------------------------
If you need a web apps or autmation scripts, connect me
https://www.linkedin.com/in/dmitry-safarov-b08745194/
--------------------------------------

Login to facebook in Google Chrome or Chromium 
open m.facebook.com 
push F12
go to console
put in script posts_limit variable to what you need
input limit of likes
copy script code and paste it inside console
click enter and launch it
*/


async function scroll() {
    return new Promise(resolve => {
        setTimeout(() => {
            window.scrollTo(0,  document.body.scrollHeight)
            console.log("SCROLL")
            resolve()
            }, Math.floor(Math.random() * 10000));
    })
    }

async function sleep() {
        return new Promise(resolve => {
            setTimeout(() => {
             console.log("sleeped")
                resolve()
            }, Math.floor(Math.random() * 10000))
        })
    } 

    async function singleClick(elem) {
        return new Promise(resolve => {
            setTimeout(() => {
                elem.click()
                resolve()
            }, Math.floor(Math.random() * 10000))
        })
    }

async function likeAllPosts() {
    const posts_limit = prompt('Enter amount of likes: ', '');
    var posts = document.getElementsByClassName("_15ko");;
     for(var i=0;i<Number(posts_limit);i++)
     {
         if(posts[i].classList.contains("_77la")==false)
         {
            await scroll()
            await sleep()
            await singleClick(posts[i])
            console.warn(`Post ${i} was liked!`)
            await sleep()

            posts = document.getElementsByClassName("_15ko");
         }
     } 
    }

likeAllPosts()
