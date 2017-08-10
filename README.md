ArgonJS-PlayGround
==================

This is a test environment being developed for the 10th installment of the Teleios Power Hour live series. We will be exploring ArgonJS and A-Frame and interact with a virtual environment using HTTP requests sent by a conversational chatbot.

How to Use
----------

The project can found on [Glitch](https://glitch.com/) at https://chisel-season.glitch.me/. Because the project uses ArgonJS, to properly view the VR scene you should download the Argon app on your mobile phone and then visit the link above.

The current features and how they are implemented are as follows:
 * Change an entity's color
 
Send a simple GET request to "/colorchange/_{entityId}_/_{Hex Color}_". For example, to change the color of the original sphere to blue you can visit "https://chisel-season.glitch.me/colorchange/sphere/1523BC"

 * Make an entity spin
 
Send a GET request to "/spin/_{entityId}_[/{_axis_}][/{speed}]. For example, to make the cylinder spin quickly along its z-axis you can visit "https://chisel-season.glitch.me/spin/cylinder/z/1.4"

These rotations can also be mixed and matched. That is you can have an entity spin at some speed along its x-axis and simultaneously spin at another speed along its y-axis. Additionally, if _entityId_ is set to _all_, the rotation will be applied to all the entities.  

These rotation can be stopped by sending a GET to "/spin/_{entityId}_/stop" with _all_ again being a valid substitute for _entityId_.

 * Make an entity bounce
 
Send a GET request to "/bounce/_{entityId}_[/{speed}]. For example, to make the cylinder bounce slowly you can visit "https://chisel-season.glitch.me/bounce/cylinder/0.01"

Rotations and bounces can also be mixed and matched and _entityId_ can be substituted with _all_.

These bounces can be stopped by sending a GET to "/bounce/_{entityId}_/stop" with _all_ again being a valid substitute for _entityId_.

 * Change the size of an entity
 
Send a POST request to "/sizechange/_{entityId}_" with the dimensions of the object that are to be updated. For example, to make the original cylinder taller and thinner you can send a POST request to "https://chisel-season.glitch.me/sizechange/cylinder" with the following body:

```JSON
{
	"sizes": {
		"height": "2",
		"radius": "0.25"
	}
}
```

 * Change the position of an entity
 
Send a POST request to "/positionchange/_{entityId}_" with the new position of the entity described by X, Y and Z positional values. For example, to move the original square you can send a POST request to "https://chisel-season.glitch.me/positionchange/square" with the following body:

```JSON
{
	"position": {
		"x": "8",
		"y": "6",
		"z": "8"
	}
}
```

The characters "_=_", "_+_", and "_-_" can also be inserted instead of a number coordinate with "_=_" making the entity retain its original value for that dimension, "_+_" adding 1 to the dimension and "_-_" subtracting 1 from the dimension.

 * Add an entity
 
Send a POST request to "/addentity" with the entity data that will be used to construct the object. For example, to add a cylinder you can send a POST request to "https://chisel-season.glitch.me/addentitiy" with the following body:

```JSON
{
	"entityData": {
		"type": "cylinder",
		"id": null,
		"position": "0 3 3",
		"cursorListener": true,
		"color": "#EE4496",
		"sizes": {
			"height": "1",
			"radius": "1"
		}
	}
}
```
