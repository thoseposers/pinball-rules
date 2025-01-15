layout: page
title: "Landing Page"
permalink: /index

<html>
  <head></head>
  <body>
  <object data="monsterbash.svg" type="image/svg+xml" id="playfield" width="100%" height="100%"></object>
    
    <!-- [1] -->
    <div id="modal-1" aria-hidden="true">

      <!-- [2] -->
      <div tabindex="-1" data-micromodal-close>

        <!-- [3] -->
        <div role="dialog" aria-modal="true" aria-labelledby="modal-1-title" >


          <header>
            <h2 id="modal-1-title">
              Modal Title
            </h2>

            <!-- [4] -->
            <button aria-label="Close modal" data-micromodal-close></button>
          </header>

          <div id="modal-1-content">
            Modal Content
          </div>

        </div>
      </div>
    </div>
        
    Updated
    <script
			  src="https://code.jquery.com/jquery-3.7.1.min.js"
			  integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
			  crossorigin="anonymous"></script>
    <script src="https://unpkg.com/micromodal/dist/micromodal.min.js"></script> 
    <script type="text/javascript">
      let playfield = document.getElementById('playfield');
      let svgDoc = playfield.contentDocument;
      let monsterInstruments = svgDoc.getElementById("MonsterInstruments");
      monsterInstruments.addEventListener("click", MicroModal.show('modal-1'));
    </script>
  </body>
</html>
