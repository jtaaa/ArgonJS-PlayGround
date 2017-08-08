ArgonJS-PlayGround
==================

This is a test environment being developed for the 10th installment of the Teleios Power Hour live series. We will be exploring ArgonJS and A-Frame and interact with a virtual environment using HTTP requests sent by a conversational chatbot.

How to Use
----------

The project can found on [Glitch](https://glitch.com/) at https://chisel-season.glitch.me/. Because the project uses ArgonJS, to properly view the VR scene you should download the Argon app on your mobile phone and then visit the link above.

The current features and how they are implemented are as follows:
 * Change an entity's color
 
Send a simple GET request to "/colorchange/_{entityId}_/_{Hex Color}_". For example, to change the color of the original sphere to blue you can visit "https://chisel-season.glitch.me/colorchange/sphere/1523BC"

 * Change the size of an entity
 
Send a POST request to "/sizechange/_{entityId}_" with the dimensions of the object that are to be updated. For example, to make the original cylinder taller and thinner you can send a POST request to "https://chisel-season.glitch.me/sizechange/cylinder" with the following body:

    { 
      "sizes": {
        "height": "2",
        "radius": "0.25"
      }
    }

 * Change the position of an entity
 
Send a POST request to "/positionchange/_{entityId}_" with the new position of the entity as a space separated string of X, Y and Z positional values. For example, to move the original square you can send a POST request to "https://chisel-season.glitch.me/positionchange/square" with the following body:

    {
      "position": "6 0 3"
    }

 * Add an entity
 
Send a POST request to "/addentity" with the entity data that will be used to construct the object. For example, to add a cylinder you can send a POST request to "https://chisel-season.glitch.me/addentitiy" with the following body:

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
