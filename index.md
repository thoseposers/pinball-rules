layout: page
title: "Landing Page"
permalink: /index

<!DOCTYPE html>
<html>
  <head>
    <style>
                      svg path {
                cursor: pointer;
                }

                svg path:hover {
                fill: rgba(0,0,0,50) !important;
                fill-opacity: 15% !important;
                }
    </style>
    <style>
      .micromodal {
        display: none;
      }
  
      .micromodal.is-open {
        display: block;
      }
  
      .micromodal__overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0,0.65);
      }
  
      .micromodal__container {
        box-sizing: border-box;
        overflow-y: auto;
        max-width: 500px;
        max-height: 100vh;
        padding: 30px;
        background-color: #fff;
        border-radius: 4px;
      }
  
      .micromodal[aria-hidden="false"] .micromodal__overlay {
        animation: microModalFadeIn .2s cubic-bezier(0.0, 0.0, 0.2, 1);
      }
  
      .micromodal[aria-hidden="false"] .micromodal__container {
        animation: microModalSlideIn .2s cubic-bezier(0, 0, .2, 1);
      }
  
      .micromodal .micromodal__container,
      .micromodal .micromodal__overlay {
        will-change: transform;
      }
  
      @keyframes microModalFadeIn {
          from { opacity: 0; }
            to { opacity: 1; }
      }
  
      @keyframes microModalSlideIn {
        from { transform: translateY(15%); }
          to { transform: translateY(0); }
      }
    </style>
    <script
			  src="https://code.jquery.com/jquery-3.7.1.min.js"
			  integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
			  crossorigin="anonymous"></script>
    
    
    <script type="text/javascript">
      
      function test(){
        let i = 1;
      }
    </script>
  </head>
  <body>

    <svg
       width="210mm"
       height="297mm"
       viewBox="0 0 210 297"
       version="1.1"
       id="svg1"
       xml:space="preserve"
       xmlns:xlink="http://www.w3.org/1999/xlink"
       xmlns="http://www.w3.org/2000/svg"
       xmlns:svg="http://www.w3.org/2000/svg"><defs
         id="defs1" /><g
         id="layer1"><image
           width="170.30737"
           height="294.29651"
           preserveAspectRatio="none"
           href="playfield-images/monster.jpg"
           id="image1"
           x="12.329377"
           y="2.0948977" /><a
           id="a1"
           onclick="test()"><path
             style="fill:#000000;stroke-width:0.963;stroke-dasharray:none;stroke:#000000;stroke-opacity:1;fill-opacity:0"
             d="m 70.261976,187.67016 c 0,0 -5.185606,-8.99855 -8.083447,-17.082 -2.897832,-8.08343 -14.031634,-35.9942 -14.031634,-35.9942 l -10.218704,15.09927 15.709345,35.07909 z"
             id="CreatureFeatureRamp" /></a><path
           style="fill:#000000;stroke-width:1.663;stroke:#000000;stroke-opacity:1;stroke-dasharray:none;fill-opacity:0"
           d="m 77.430315,220.76653 c 0,0 3.355392,18.60717 19.827316,18.30214 16.471929,-0.30504 20.437389,-17.9971 20.437389,-17.9971 l 20.5899,24.40284 -39.959662,27.14818 -45.297799,-26.84314 z"
           id="MonsterInstruments"
           onclick="MicroModal.show('modal-1');" /></g></svg>
    
    
    
    
    
    Updated

    
    <div class="micromodal" id="modal-1" aria-hidden="true">
      <div class="micromodal__overlay" tabindex="-1" data-micromodal-close>
        <div class="micromodal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
          <button aria-label="Close modal" data-micromodal-close>X</button>
          <p>hi there, I'm some modal content!</p>
        </div>
      </div>
    </div>
    <script src="https://unpkg.com/micromodal/dist/micromodal.min.js"></script>
    <script>
      MicroModal.init();
    </script> 
  </body>
</html>