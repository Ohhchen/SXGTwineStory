# SXGTwineStory


An interactive storytelling game built with Twine to acquaint the Youths with their environment in the Stó:lō Xwexwilmexw Government

## Getting Started 

1. Clone this [repository](https://github.com/dacerron/SXGTwineStory)

Once the repository is cloned, you will have the files listed below: 

- package-lock.json
- kwitseleqprototypeStyles.css
  - This is a replica of the stylesheet that is used within the story as backup in case something goes horribly wrong and the styles are lost
- images
  - This folder stores the assets that are used throughout the story
  - The images used in this story is hosted on gh-pages
- kwitseleqprototype.html
  - This is the build file from Twine 1. This file can be ignored if not working on Twine 1. Note: this build file is still running on the local server. If you wish to publish this online, please connect it to a host. 
- kwitseleqprototypesugarcube.html
  - This is the build file from Twine 2 using Sugarcube 2.36.1 story format. This is the build file that is currently published. Note: this build file is still running on the local server. If you wish to publish this online, please connect it to a host. 
- scripts.js
  - This is the javascript file that contains all the systems implemented to run globally throughout the story. For more information on the system, please refer to The Systems for Feature Implementation below.
- kwitseleqprototype
  - This is a file that one can import as Twee source code in Twine 1. This file can be ignored if not working on Twine 1.

2. Go to your Twine 2 app or your Twine 2 account if you are using the web version and select **Import from File** to upload **kwitseleqprototypesugarcube.html**. Twine will give you an option to replace the file if it has been uploaded before. Otherwise, it will import this file as a separate story.

To make a different story but keep the structure and the systems from this repository, it is suggested to create your own repository and migrate these files or fork this repository.

The Github use in this case is to track and keep the iterations on the story file. Since everything is kept inside of Twine, the most important file (aside from any external references such as scripts.js) to keep track of in this case are the html files as it contains all the information of the story. 

## Example variables from javascript to Twinescript

In javascript:

``SugarCube.State.variables.variableName``

Use the same variable in Twine without declaring ``<<script>>``

  ``$variableName``

## Example objects from javascript to Twinescript

In javascript:

  ``
        SugarCube.State.variables.objectName = {
        "item1": 0,
        "item2": 1 
        }
  ``

Use the same object in Twine without declaring ``<<script>>``

  ``$objectName``

Getting a value of a property in an object is the same as one would do in javascript

## Example code
  
In javascript:
  
``
        SugarCube.setup.increaseRelation = function(name) {
          if(SugarCube.State.variables.relations[name] != undefined) {
          SugarCube.State.variables.relations[name] = SugarCube.State.variables.relations[name] + 1
          }
          console.log(SugarCube.State.variables.relations);
        }
``

To use the function in Twine:
  
``
        <<script>>
          SugarCube.setup.increaseRelations(name)
       <</script>>
``

## To run any external javascript file in a Twine story

In Twine: 

At the **Start** passage, initialize your file by: 

``<<run importScripts("<your script file path>")>>``

#### Note:

You must build the story before testing any external script file. The code will only work in the build file since the .js file needs to be in close relation.

For a more detailed documentation, please refer to [this documentation](https://docs.google.com/document/d/1GNCxLfUwYY5DQBuEq6DyyKVaXzwshP4_fae55BhWXh4/edit?usp=sharing). Permission to access the documentation may be requested. 
