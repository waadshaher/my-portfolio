
AFRAME.registerComponent('place-hair', {
    init: function () {
        var buttonEls = this.buttonEls = this.el.querySelectorAll('.hair-button');
        this.onClick = this.onClick.bind(this);
        this.el.addEventListener('click', this.onClick)
    },

    onClick: function (evt) {
        this.el.object3D.position.set(0, 0, 1)
    }
});