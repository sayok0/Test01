//=============================================================================
// さよこ Engine Plugins - Setup core
// sayoko_SetupCore.js
//=============================================================================

var Imported = Imported || {};
Imported.sayoko_SetupCore = true;

var Sayoko = Sayoko || {};
Sayoko.JPF = Sayoko.JPF || {};
Sayoko.JPF.version = 0.03;

/*:
* @plugindesc Setup Core, needed for this game.
* @author Sayoko
*
* @help This plugin does not provide plugin commands.

This is just a test plugin.
Check if there is any uppdate for this game and tell player if needed!

This plugin does have som basic setup for INT.


Please don¨t remove this plugin!
Some content won´t work if you do that!

 */

//=============================================================================
// Parameter Variables
//=============================================================================

Sayoko.Parameters = PluginManager.parameters('sayoko_SetupCore');
Sayoko.Param = Sayoko.Param || {};

//function NewVersion() {

   if (Sayoko.JPF.version = 0.03) {
       console.log('This is new Version of this game! Please download it now')
   }
//}

