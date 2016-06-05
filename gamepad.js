var gamepads = [];

var prevRawGamepadTypes = [];
var prevTimestamps = [];

function initGamepad()
{
    gamepadtick();
}

function gamepadtick()
{
    pollStatus();
    scheduleNextTick();
}

function scheduleNextTick()
{
    if (window.requestAnimationFrame) {
        window.requestAnimationFrame(gamepadtick);
    } else if (window.mozRequestAnimationFrame) {
        window.mozRequestAnimationFrame(gamepadtick);
    } else if (window.webkitRequestAnimationFrame) {
        window.webkitRequestAnimationFrame(gamepadtick);
    }
}

function pollStatus()
{
    pollGamepads();

    for (var i in gamepads) {
        var gamepad = gamepads[i];
        if (gamepad.timestamp &&
            (gamepad.timestamp == prevTimestamps[i])) {
            continue;
        }
        prevTimestamps[i] = gamepad.timestamp;
    }
}

function pollGamepads()
{
    var rawGamepads =
        (navigator.getGamepads && navigator.getGamepads()) ||
        (navigator.webkitGetGamepads && navigator.webkitGetGamepads());

    if (rawGamepads) {
        gamepads = [];
        var gamepadsChanged = false;

        for (var i = 0; i < rawGamepads.length; i++) {
            if (typeof rawGamepads[i] != prevRawGamepadTypes[i]) {
                gamepadsChanged = true;
                prevRawGamepadTypes[i] = typeof rawGamepads[i];
            }

            if (rawGamepads[i]) {
                gamepads.push(rawGamepads[i]);
            }
        }
    }
}
