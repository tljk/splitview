# A tampermonkey script to create a split view, built for foldable devices

It will split a tab into two sub pages. Long press any link on the left to open it on the right side.  
  
~~It breaks the original behavior of links to make it possible to navigate, which may cause the page to behave abnormally.  ~~
~~It uses sandbox to counteract anti-attack behavior of some websites, which may also cause anomalies.  ~~
~~In all, it is a primitive and rough way that may have many unknown problems.  ~~


## Demo  
![](https://github.com/tljk/splitview/blob/master/a.png?raw=true)
![](https://github.com/tljk/splitview/blob/master/b.png?raw=true)

## Usage  
A browser that can run tampermonkey. For android, I recommend to use firefox nightly.  

## Known Issue 
google.com ✔️  
stackoverflow.com ❓  
  
Page failed to load or navigate with errors like
* Refused to execute inline script because it violates the following Content Security Policy directive  
* Refused to display 'https://github.com/' in a frame because it set 'X-Frame-Options' to 'deny'  
  
Possible workaround, use following extension to disable this ***security*** feature.  
[Ignore X-Frame headers](https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe)  