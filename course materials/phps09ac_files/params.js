//#AutoLoad

/**
 * Authors:   Muness Alrubaie
 */

/**
 * Params offers a key-value list suited for web apps.
 * Can convert itself to/from URL strings and XML
 *
 * @constructor
 * Constructor.
 *
 * @author              Muness Alrubaie
 * @version             0.2, 2004-01-06
 * @interface           <code>new Params()</code>
 */
function Params()
{
	this.init();
}

/**
 * Initialize the list
 *
 * @summary             initialize list
 * @author              Muness Alrubaie
 * @interface           <code>Params.init()</code>
 * @history Refactored code from constructor and loadXML.
 * @type void
 */
function Params_init()
{
	this.parms = new Object();
}
Params.prototype.init = Params_init;

/**
 * Removes a key-value pair
 *
 * @summary             remove pair
 * @author              Muness Alrubaie
 * @interface           <code>Params.remove(key)</code>
 * @param key The key of the entry to remove.
 * @type void
 */
function Params_remove(key)
{
	key = escape(key.toString());
	delete this.parms[key];
}
Params.prototype.remove = Params_remove;


/**
 * Sets the key to the given value
 *
 * @summary             set key to value
 * @author              Muness Alrubaie
 * @interface           <code>Params.set(key, value)</code>
 * @param key The key of the entry being added.
 * @param val The value of the entry.
 * @type void
 */
function Params_put(key,val)
{
	if(typeof(val) == "undefined") return;

	this.remove(key);
	this.parms[key] = val;
}
Params.prototype.put = Params_put;

/**
 * Gets the value of the given key
 *
 * @summary             get value of key
 * @author              Muness Alrubaie
 * @interface           <code>Params.get(key)</code>
 * @param key The key of the entry being queried.
 * @return Value of the key passed in if a value exists, otherwise, null.
 * @type String
 */
function Params_get(key)
{
	var textVal = this.parms[key];

	return(textVal);
}
Params.prototype.get = Params_get;


/**
 * Return a list of all the keys in the ParameterList
 *
 * @summary             Return a list of all the keys
 * @author              Muness Alrubaie
 * @interface           <code>Params.getKeys()</code>
 * @return A list of all the keys (in arbitrary order)
 * @type Array
 */
function Params_getKeys() {
	var keys=new Array();
	for (key in this.parms)
		keys[keys.length] = key;
	return(keys);
}
Params.prototype.getKeys = Params_getKeys;

/**
 * Return encoded version of the ParameterList
 *
 * @summary             Return encoded version of the ParameterList
 * @author              Muness Alrubaie
 * @interface           <code>Params.toEncoded()</code>
 * @return An encoded version of the ParameterList
 * @type String
 */
function Params_toEncoded()
{
	return (this.toURLString());
}
Params.prototype.toEncoded = Params_toEncoded;

/**
 * Load a ParameterList from an encoded version
 *
 * @summary             Load a parameter list from an encoded version
 * @author              Muness Alrubaie
 * @interface           <code>Params.loadEncoded(encodedParamList)</code>
 * @param encodedParamList encoded version used to initialize the parameter list
 * @type void
 */
function Params_loadEncoded(encodedParamList)
{
	this.loadURLString(encodedParamList);
}
Params.prototype.loadEncoded = Params_loadEncoded;

/**
 * Return a URL String version of the ParameterList
 *
 * @summary             Return a URL String version of the ParameterList
 * @author              Muness Alrubaie
 * @interface           <code>Params.toURLString()</code>
 * @return representation of the parameter list suitable for appending to a URL
 * @type String
 */
function Params_toURLString()
{
	var keys = this.getKeys();
	var result = "";

	var counter=0;
	for (counter=0;counter<keys.length;)
	{
		result+=escape(keys[counter]) + "=" + encodeURIComponent(this.get(keys[counter]));
		if (++counter<keys.length)
		{
			result += "&";
		}
	}
	return(result);
}
Params.prototype.toURLString = Params_toURLString;

/**
 * Load parameters from a URL string (replacing all existing parameters)
 *
 * @summary             Load parameters from a URL string (replacing all existing parameters)
 * @author              Muness Alrubaie
 * @interface           <code>Params.loadURLString(URLString)</code>
 * @param URLString URI encoded &-separated series of =-separated key/value pairs
 * @returns true if the load was successful, false otherwise
 * @type boolean
 */
function Params_loadURLString(URLString)
{
	var success = true;
	var entries = URLString.split("&");

	var counter=0;
	this.init();
	for (counter=0;counter<entries.length;counter++)
	{
		var entry = entries[counter].split("=");
		if (entry[0] && (entry[1] == false)) {
			var key = unescape(entry[0]);
			this.put(key, "");
		}
		if (entry[0] && entry[1]) {
			var key = unescape(entry[0]);
			var val = decodeURIComponent(entry[1]);
			this.put(key, val);
		} else {
			success = false;
		}
	}
	return(success);
}
Params.prototype.loadURLString = Params_loadURLString;

/**
 * Helper function to go to a url.
 * If a url parameter is used, the current window is redirected there,
 * otherwise, the value of the key-value pair "url" is used
 * and that key-value pair is removed.
 *
 * As this redirects a web page, there should be no more processing after it.
 *
 * @summary             Goes
 * @author              Muness Alrubaie
 * @interface           <code>Params.goto(String)</code>
 * @param url String: URL to redirect to.
 * @type void
 */
function Params_goto(url)
{
	if (typeof(url) == "undefined" || url == null) {
		var url = this.get("url");
		this.remove("url");
	}
	
	var querystr = url.split("?")[1];
	if (typeof(querystr) != "undefined" && querystr != null)
	{
		url = url.split("?")[0];
		var querystrParams = new Params();
		querystrParams.loadURLString(querystr);
		var querystrKeys = querystrParams.getKeys();
		for (var counter=0;counter<querystrKeys.length;counter++)
		{
			if (this.get(querystrKeys[counter]) == null)
			{
				this.put(querystrKeys[counter], querystrParams.get(querystrKeys[counter]));
			}
		}
	}
	
	var delim = (url.indexOf("?") > -1) ? "&" : "?";
	var isLMS= (this.get("3rd")=="1") ? true : false;
	if (!isLMS && typeof(winParms) != "undefined") // do not open new window if launched via LMS
	{
		var winName = self.name;
		self.name = winName + "_detect";
		ThisPage.floatWin(url + delim + this.toURLString(), winName, winParms)
		self.close();
	} else window.location.href=url + delim + this.toURLString();
	return;
}
Params.prototype.goto = Params_goto;

/**
 * Function that simulates the instanceOf operator in other languages.
 * Bummer: only works in Netscape/Mozilla.  Useless in IE.  (__proto__ doesn't work)
 * TODO: This should be moved to a different .js file that is included everywhere.
 *
 * @summary             Determines if a class is an instance of a given class
 * @author              Muness Alrubaie
 * @interface           <code>instanceOf(Object, Class)</code>
 * @param object Object to examine
 * @param type Class to compare to (in Javascript this is also a constructor function)
 * @return whether object is of type Class
 * @history from http://www.webreference.com/js/column79/7.html
 * @type boolean
 */
function instanceOf(object, type) {
  while (object != null) {
    if (object == type.prototype) {
    	return true;
    }
   //Go back up a level in the inheritance heirarchy
	  object = object.__proto__;
  }
  return false;
}

//Automatically create a params for the current page
if (typeof(window) != "undefined" && window != null)
{
	var URL = window.location.href;
	var input = URL.split("?")[1];
	if (typeof(input) != "undefined" && input != null)
	{
		var params = new Params();
		params.loadURLString(input);
	} else {
		params = new Params();
	}
}

