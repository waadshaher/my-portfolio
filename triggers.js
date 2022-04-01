AFRAME.registerComponent("show-text", {
    init: function () {
        var sceneEl = document.querySelector('a-scene');
        this.el.addEventListener("click", (e) => {
            let text = sceneEl.querySelector("a-text")
            setTimeout(() => {
                // scale and show
                text.setAttribute("visible", !text.getAttribute("visible"))
              }, 1000)
        })
    }
})