window.onload = init;

function init() {

  TweenMax.set('.centerX', { position: 'absolute', xPercent: -50, left: '50%' });
  TweenMax.set('.centerY', { position: 'absolute', yPercent: -50, top: '50%' });
  TweenMax.set('.centerXY', { position: 'absolute', xPercent: -50, yPercent: -50, left: '50%', top: '50%' });

  new TimelineMax({ repeat: 1, repeatDelay: 3 })
    .set('#ad', { visibility: 'visible' })

    .addLabel("screen1")
    .from('#visuel', 4, { scale: 1, ease: Power1.easeOut }, "screen1")

    .addLabel("screen2")
    .from('#logo_blanc', 0.2, {opacity:0, ease: Power1.easeOut},'screen2')
    .to('#screen1Container', .5, { width: 0, height:0,  transformOrigin: "50% bottom", ease: Power1.easeOut }, "screen2")
    .to('#screen1', .5, { x:-364, y:-45,  transformOrigin: "50% bottom", ease: Power1.easeOut }, "screen2")   
    .from('#bg', .5, { scale:2, opacity:0, ease: Power1.easeOut }, "screen2")
    .addLabel("screen3", "-=.5")
    .from('#bloc_prix', .3, {alpha:0, y:20, ease: Power1.easeOut }, "screen3+=.2")
    .from('#fanion', .3, {alpha:0, y:-20, ease: Power1.easeOut }, "screen3+=.5")
    .from('#cta', .3, {alpha:0, y:20, ease: Power1.easeOut }, "screen3+=.8")
    .from('#ml', .5, { alpha:0, ease: Power1.easeOut }, "screen3+=1")
    


   //GSDevTools.create();
}