const weaponpos = { x: -0.45, y: -0.25, z: 0.32 };
var default_pos = { x: -0.221, y: -0.058, z: 0 };

let pos;
pc.app.on('Player:Focused', function (state) {
    if (state) {
        pc.app.root.findByName("WeaponCenter").setLocalPosition(default_pos.x, default_pos.y, default_pos.z);
    } else {
        pc.app.root.findByName("WeaponCenter").setLocalPosition(weaponpos.x, weaponpos.y, weaponpos.z);
    }
})