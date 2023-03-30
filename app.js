$(() => {
    let i=1;
    setInterval(()=>{
      i=Number(!i);
      $('body').find('.crsr').css("opacity",i)
    },400)
    const 
    
    randomNum = (min = 0, max = 4)=>{
        return (min + Math.floor(Math.random() * (max - min + 1)));
      },
    wait= (min = 1000, max = 4500) => new Promise(r => {
        if (max == null) {
          max = min;
          min = 0;
        }
        setTimeout(r, (min + Math.floor(Math.random() * (max - min + 1))))
      });
      const 
      getUserMsg = ()=>{
        return `<div class="w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group dark:bg-gray-800">
        <div class="text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0">
            <div class="w-[30px] flex flex-col relative items-end">
                <div style="background-color:#f0c2f6;" class="bg-[#fffff] rounded-sm text-white flex justify-center items-center relative tracking-widest h-8 w-8 text-xs">
                    <img src="user.png" style="width: 27px;"/>   
                </div>
            </div>
            <div class="relative flex w-[calc(100%-50px)] md:flex-col lg:w-[calc(100%-115px)]">
                <div class="flex flex-grow flex-col gap-3">
                    <div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap" id="user-text"></div>
                </div>
                <div class="text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible">
                    
                </div>
            </div>
        </div>
    </div>`;
      },
      getBotMsg = ()=>{
        return `<div class="w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group bg-gray-50 dark:bg-[#444654]">
        <div class="text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0">
            <div class="w-[30px] flex flex-col relative items-end">
                <div class="relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center" style="background-color:#92effb;">
                    <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect width="24" height="24" fill="url(#pattern0)"></rect>
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_102_53" transform="scale(0.01)"></use>
                            </pattern>
                            <image id="image0_102_53" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAMP2lDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnluSkEBooUsJvQkiNYCUEFoA6UUQlZAECCXEQFCxo4sKrl0sYENXRRQ7IBYUUSwsig37YkFFWRcLduVNCui6r3zvfN/c+99/zvznzLlzywCgdpIjEuWi6gDkCQvFsSEB9HHJKXTSU4AAHFCABvDmcAtEzOjoCABt6Px3e3cDekO76iDV+mf/fzUNHr+ACwASDXE6r4CbB/EhAPAqrkhcCABRyptPKRRJMWxASwwThHihFGfKcZUUp8vxPplPfCwL4lYAlFQ4HHEmAKqXIU8v4mZCDdV+iJ2EPIEQADU6xL55efk8iNMgtoE+Ioil+oz0H3Qy/6aZPqzJ4WQOY/lcZKYUKCgQ5XKm/Z/l+N+WlysZimEFm0qWODRWOmdYt5s5+eFSrAJxnzA9MgpiTYg/CHgyf4hRSpYkNEHujxpyC1iwZkAHYiceJzAcYkOIg4W5kREKPj1DEMyGGK4QdKqgkB0PsR7EC/kFQXEKn83i/FhFLLQ+Q8xiKvhzHLEsrjTWfUlOAlOh/zqLz1boY6rFWfFJEFMgtigSJEZCrAqxY0FOXLjCZ0xxFityyEcsiZXmbwFxLF8YEiDXx4oyxMGxCv+yvIKh+WKbswTsSAU+UJgVHyqvD9bK5cjyh3PBLvOFzIQhHX7BuIihufD4gUHyuWPP+MKEOIXOB1FhQKx8LE4R5UYr/HEzfm6IlDeD2LWgKE4xFk8shAtSro9niAqj4+V54sXZnLBoeT74MhABWCAQ0IEEtnSQD7KBoKOvoQ9eyXuCAQeIQSbgAwcFMzQiSdYjhMc4UAz+hIgPCobHBch6+aAI8l+HWfnRAWTIeotkI3LAE4jzQDjIhdcS2SjhcLRE8Bgygn9E58DGhfnmwibt//f8EPudYUImQsFIhiLS1YY8iUHEQGIoMZhoixvgvrg3HgGP/rA54wzcc2ge3/0JTwidhIeE64Ruwq1JghLxT1mOBd1QP1hRi/Qfa4FbQU03PAD3gepQGdfBDYAD7grjMHE/GNkNsixF3tKq0H/S/tsMfrgbCj+yExkl65L9yTY/j1S1U3UbVpHW+sf6yHNNH643a7jn5/isH6rPg+fwnz2xhdhBrA07hZ3HjmENgI41Y41YO3ZciodX12PZ6hqKFivLJwfqCP4Rb+jOSitZ4FTr1Ov0Rd5XyJ8qfUcDVr5omliQmVVIZ8IvAp/OFnIdR9KdnZxdAJB+X+Svrzcxsu8GotP+nZv3BwA+zYODg0e/c2HNAOz3gI//ke+cDQN+OpQBOHeEKxEXyTlceiDAt4QafNL0gTEwBzZwPs7AHXgDfxAEwkAUiAfJYCLMPguuczGYAmaAuaAUlINlYDVYDzaBrWAn2AMOgAZwDJwCZ8FFcBlcB3fg6ukBL0A/eAc+IwhCQqgIDdFHTBBLxB5xRhiILxKERCCxSDKShmQiQkSCzEDmIeXICmQ9sgWpQfYjR5BTyHmkE7mFPEB6kdfIJxRDVVAt1Ai1QkehDJSJhqPx6AQ0E52MFqPz0SXoWrQa3Y3Wo6fQi+h1tBt9gQ5gAFPGdDBTzAFjYCwsCkvBMjAxNgsrwyqwaqwOa4L3+SrWjfVhH3EiTsPpuANcwaF4As7FJ+Oz8MX4enwnXo+34lfxB3g//o1AJRgS7AleBDZhHCGTMIVQSqggbCccJpyBz1IP4R2RSNQhWhM94LOYTMwmTicuJm4g7iWeJHYSHxEHSCSSPsme5EOKInFIhaRS0jrSblIz6Qqph/RBSVnJRMlZKVgpRUmoVKJUobRL6YTSFaWnSp/J6mRLshc5iswjTyMvJW8jN5EvkXvInykaFGuKDyWekk2ZS1lLqaOcodylvFFWVjZT9lSOURYoz1Feq7xP+ZzyA+WPKpoqdioslVQVicoSlR0qJ1VuqbyhUqlWVH9qCrWQuoRaQz1NvU/9oEpTdVRlq/JUZ6tWqtarXlF9qUZWs1Rjqk1UK1arUDuodkmtT52sbqXOUueoz1KvVD+i3qU+oEHTGK0RpZGnsVhjl8Z5jWeaJE0rzSBNnuZ8za2apzUf0TCaOY1F49Lm0bbRztB6tIha1lpsrWytcq09Wh1a/dqa2q7aidpTtSu1j2t362A6VjpsnVydpToHdG7ofNI10mXq8nUX6dbpXtF9rzdCz1+Pr1emt1fvut4nfbp+kH6O/nL9Bv17BriBnUGMwRSDjQZnDPpGaI3wHsEdUTbiwIjbhqihnWGs4XTDrYbthgNGxkYhRiKjdUanjfqMdYz9jbONVxmfMO41oZn4mghMVpk0mzyna9OZ9Fz6Wnorvd/U0DTUVGK6xbTD9LOZtVmCWYnZXrN75hRzhnmG+SrzFvN+CxOLsRYzLGotbluSLRmWWZZrLNss31tZWyVZLbBqsHpmrWfNti62rrW+a0O18bOZbFNtc82WaMuwzbHdYHvZDrVzs8uyq7S7ZI/au9sL7DfYd44kjPQcKRxZPbLLQcWB6VDkUOvwwFHHMcKxxLHB8eUoi1Epo5aPahv1zcnNKddpm9Od0Zqjw0aXjG4a/drZzpnrXOl8zYXqEuwy26XR5ZWrvSvfdaPrTTea21i3BW4tbl/dPdzF7nXuvR4WHmkeVR5dDC1GNGMx45wnwTPAc7bnMc+PXu5ehV4HvP7ydvDO8d7l/WyM9Rj+mG1jHvmY+XB8tvh0+9J903w3+3b7mfpx/Kr9Hvqb+/P8t/s/Zdoys5m7mS8DnALEAYcD3rO8WDNZJwOxwJDAssCOIM2ghKD1QfeDzYIzg2uD+0PcQqaHnAwlhIaHLg/tYhuxuewadn+YR9jMsNZwlfC48PXhDyPsIsQRTWPRsWFjV469G2kZKYxsiAJR7KiVUfeiraMnRx+NIcZEx1TGPIkdHTsjti2OFjcpblfcu/iA+KXxdxJsEiQJLYlqiamJNYnvkwKTViR1jxs1bua4i8kGyYLkxhRSSmLK9pSB8UHjV4/vSXVLLU29McF6wtQJ5ycaTMydeHyS2iTOpINphLSktF1pXzhRnGrOQDo7vSq9n8viruG+4PnzVvF6+T78FfynGT4ZKzKeZfpkrszszfLLqsjqE7AE6wWvskOzN2W/z4nK2ZEzmJuUuzdPKS8t74hQU5gjbM03zp+a3ymyF5WKuid7TV49uV8cLt5egBRMKGgs1II/8u0SG8kvkgdFvkWVRR+mJE45OFVjqnBq+zS7aYumPS0OLv5tOj6dO71lhumMuTMezGTO3DILmZU+q2W2+ez5s3vmhMzZOZcyN2fu7yVOJStK3s5Lmtc032j+nPmPfgn5pbZUtVRc2rXAe8GmhfhCwcKORS6L1i36VsYru1DuVF5R/mUxd/GFX0f/uvbXwSUZSzqWui/duIy4TLjsxnK/5TtXaKwoXvFo5diV9avoq8pWvV09afX5CteKTWsoayRrutdGrG1cZ7Fu2bov67PWX68MqNxbZVi1qOr9Bt6GKxv9N9ZtMtpUvunTZsHmm1tCttRXW1VXbCVuLdr6ZFvitrbfGL/VbDfYXr796w7hju6dsTtbazxqanYZ7lpai9ZKant3p+6+vCdwT2OdQ92WvTp7y/eBfZJ9z/en7b9xIPxAy0HGwbpDloeqDtMOl9Uj9dPq+xuyGrobkxs7j4QdaWnybjp81PHojmOmxyqPax9feoJyYv6Jwebi5oGTopN9pzJPPWqZ1HLn9LjT11pjWjvOhJ85dzb47Ok2ZlvzOZ9zx857nT9ygXGh4aL7xfp2t/bDv7v9frjDvaP+kselxsuel5s6x3SeuOJ35dTVwKtnr7GvXbweeb3zRsKNm12pXd03eTef3cq99ep20e3Pd+bcJdwtu6d+r+K+4f3qP2z/2Nvt3n38QeCD9odxD+884j568bjg8Zee+U+oTyqemjyteeb87FhvcO/l5+Of97wQvfjcV/qnxp9VL21eHvrL/6/2/nH9Pa/ErwZfL36j/2bHW9e3LQPRA/ff5b37/L7sg/6HnR8ZH9s+JX16+nnKF9KXtV9tvzZ9C/92dzBvcFDEEXNkvwIYbGhGBgCvdwBATQaABvdnlPHy/Z/MEPmeVYbAf8LyPaLM3AGog//vMX3w76YLgH3b4PYL6qulAhBNBSDeE6AuLsNtaK8m21dKjQj3AZuDvqbnpYN/Y/I95w95/3wGUlVX8PP5X/23fFpv2MKhAAAAOGVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAACoAIABAAAAAEAAABkoAMABAAAAAEAAABkAAAAAAxz/HsAAAMySURBVHgB7ZnRdhsxCESTnv7/L6dtXmzPkVaAAK3T2yfvGg3ojkBJ+vHBPwhAAAIQgAAEIAABCEAAAhCAAATuQ+AzoZSvoEZG7mBq07Ij+/plKo2gNgIY0obalghDbJzaon4XZJrdDdGZXFBiSLJlX3RIyJu6RRhSxzakjCEhbHWLKu4Qa7WrO2U2s636q7hV/tX6ku/pkBKscVEMibMrWYkhJVjjop13yOpOOD3TV/XFKTtW0iEOWB2hGNJB2ZEDQxywOkI77hC9G6yzWtd18Bjl0Dqs9Y+0lu/okCWi3gAM6eW9zIYhS0S9AR13iHVHOputszs7zlpvSRwdUoI1LnqiQ6wnOr6rvZVa356aczUd4gRWHY4h1YSd+hjiBFYdrj/ZRPLpzM3QjNRxak3q/umQUzZO8np+ytKTMJH871/POJkmBx1ys/ODIRhyMwI3K8dzh2jpppmoi37g84zD7C65RMDIusTT/+VOh3ir9Z6Y2cnz5p3F362e7zrpkJldh95jyCHws7QYMiNz6H3lHbKa0XpHaLw+a7wXmerpetXXeH3WeNULPdMhIWx1izCkjm1IGUNC2OoWeebg7gzV9atdeWpbaY2+r65H9U37oUNGVh18hyEH4Y9SY8iIysF3lb+H6LZMM1QXFT7frZ7vrdIhhY5HpDEkQq1wDYYUwo1IY0iEWuEaDCmEG5HGkAi1wjUYUgg3It35e0ikvtEa/RvRKOb53S1/33gu8PkzHfJM4wafR6fHewK92xjl9Gh46+vO59nLv9iX+ugQL77i+He8Q15O1F8+2jH6fTHCXHk6JJfntlrGaTp9Qn9Ufjpk+0znCmBILs9tNQzZRpgrYLlDdEbnVvBQs9TyiH580vqydB4Zcj9d1keH5MLeVsOQbYS5AhiSy3Nb7XKebau/ClTNet1DV57X3SU90SFJILNkMCSLZJIOhiSBzJLR+WvR1RltWZMZ4635reqlQzKPSoIWhiRAzJTAkEyaCVreeZyQcimhMz+7xmr95QavAuiQKzoHvnuH/1PXE30AU19KOqSPtSkThpgw9QVhSB9rMkEAAhCAAAQgAAEIQAACELglgT8NvzS3U3jIJQAAAABJRU5ErkJggg=="></image>
                        </defs>
                    </svg>
                </div>
            </div>
            <div class="relative flex w-[calc(100%-50px)] md:flex-col lg:w-[calc(100%-115px)]">
                <div class="flex flex-grow flex-col gap-3">
                    <div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">
                        <img src="" id="gif-img" style="display:none"/>
                        <div class="markdown prose w-full break-words dark:prose-invert light"><p id="bot-text">I'm sorry, your question seems to be incomplete. Can you please provide more information so I can assist you?</p></div>
                    </div>
                </div>
                <div class="text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible"></div>
            </div>
        </div>
    </div>`
      },
      scrollBox = ()=>{
        let objDiv = document.getElementById("chat-box");
        objDiv.scrollTop = objDiv.scrollHeight;
      }
      
    
    const APP = {
        textArray : [`Meow. Meow meow meow. Meow, meow meow meow meow, meow. Meow meow, meow meow meow. Meow meow. Meow meow, meow. Meow meow, meow meow. Meow meow meow. Meow meow meow meow. Meow.`,
    `Meow. Meow meow. Meow - meow meow. Meow meow, meow. Meow meow - meow meow meow. Meow meow. Meow meow - meow. Meow meow meow. Meow meow meow meow. Meow.`,
    `Meow meow meow meow - meow meow! Meow meow - meow meow meow. Meow meow meow meow meow - meow meow? Meow meow meow meow meow meow - meow meow meow meow. Meow meow meow meow meow - meow meow meow meow meow meow.`,
    `Meow, meow meow meow, meow - meow meow! Meow meow, meow - meow meow meow. Meow meow meow meow, meow meow - meow meow? Meow meow meow meow, meow meow meow - meow meow meow meow. Meow meow meow meow, meow meow - meow meow meow meow, meow meow.`
    ],
        sideBarPosition: {
            onHide: { left: "-20rem" },
            onShow: { left: "0rem" }
        },
        openMenu(){
            $('#sidebar-menu').show();
            $('#sidebar-menu .menubar').animate({ left: this.sideBarPosition.onShow.left });
        },closeMenu(){
            $('#sidebar-menu .menubar').animate({ left: this.sideBarPosition.onHide.left }).promise().then(()=>{
                $('#sidebar-menu').hide();
            });
        },
        async addWords(){
            scrollBox();
            $('body').find(".crsr").remove();
            let val = $('#text-area').val();
            console.log("val",val)
            if(val=="")return false;
            $('#text-area').prop("disabled",true)
            $('#main-page').hide();
            let uText = $(getUserMsg())
            uText.find('#user-text').html(val)
            $('#chat-box').append(uText).show();
            $('#text-area').val("")
            scrollBox();
            await wait(500,1000)
            let botMsgElem = $(getBotMsg());
            botMsgElem.find("#bot-text").html(`<span></span><span class="crsr"></span>`)
            botMsgElem.find('#gif-img').attr('src',`https://cataas.com/cat/gif?${performance.now()}`).css('max-height','270px')
            $('#chat-box').append(botMsgElem)
            botMsgElem.find('#gif-img').on('load',function(){
              scrollBox();
            })
            scrollBox();
            let words = this.textArray[randomNum(0,this.textArray.length-1)];
            
            console.log(words)
            await wait(1000,5000);
            scrollBox();
            botMsgElem.find('#gif-img').show()
            for(let i of words||"".split("")){
                await wait(20,80);
                scrollBox();
                botMsgElem.find("#bot-text span").first().append(i)
            }
            await wait(200,500);
            $('#text-area').prop("disabled",false).focus()
    
            $('body').find(".crsr").remove();
          }
    }
    $('.new-cat').click(()=>{
      $('#chat-box').empty();
      $('#chat-box').hide();
      $('#main-page').show();
      APP.closeMenu()
    })
    $("#text-area").on('keyup', function (e) {
        if ((e.key === 'Enter' || e.keyCode === 13) && !e.ctrlKey ) {
            $('#chat-form').submit()
        }
    });
    $('#chat-form').on('submit',function(e){
        e.preventDefault();
        APP.addWords();
    })

    $('.close-menu').click(()=>{
        APP.closeMenu();
    })
    $('.open-menu').click(()=>{
        APP.openMenu();

    })
    
})