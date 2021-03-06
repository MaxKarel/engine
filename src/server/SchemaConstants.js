/**
 * This file defines keywords and usefull constant in schema processinng
 */
module.exports = {

	//Schema keywords
	REF_KEYWORD: '$ref',//resolvable reference
	EXTENDS_KEYWORD: 'extends', // schema extension
	IREF_KEYWORD: 'uref', //unresolvable reference

	//Schema structure
	OBJECT_LINK_KEYWORD: 'objectLink', // data link (to other collection)

	OBJECT_LINK2_KEYWORD: 'objectLink2', // data link (to other collection) v2
	OBJECT_LINK2_SCHEMA_KEYWORD: 'schema', // reference to schema used as link definition of objectLink2
	OBJECT_LINK2_OID_KEYWORD: 'oid', // referenced object identifier by objectLink2
	OBJECT_LINK2_FIELDS_KEYWORD: 'fields', // enumeration of referenced fields

	ITEMS_KEYWORD: 'items', // keyword to support arrays
	OBJECT_LINK_OID_KEYWORD: 'oid', // object id
	OBJECT_LINK_REGISTRY_KEYWORD: 'registry', // referenced collection

	PROPERTIES_KEYWORD: 'properties', // properties keyword
	OBJECT_LINK_REFDATA_KEYWORD: 'refData', // resolved reference data
	CLIENT_ACTIONS: 'clientActions', // array of client actions
	FRAGMENTED_UPDATE_ALLOWED: 'fragmentedUpdateAllowed', // save can send only fragment

	//DATA types
	TYPE_KEYWORD: 'type',
	TYPE_NUMBER: 'number',
	TYPE_STRING: 'string',

	//Data generations & behaviour
	DEFAULT_KEYWORD: 'default',
	REQUIRED_KEYWORD: 'required', // marks required fileds
	UNIQUE: 'unique', // mark fiels which value needs to be unique in collection
	SAVE_BY_SCHEMA: 'saveBySchema', // redirects save to different schema

	VARIABLE_SYMBOL: 'variableSymbol',  //marks fields which should be filled with generated VS
	SEQUENCE: 'sequence', // marks fileds that will be assigned by specified seqence
	TIMESTAMP: 'timestamp', // marks fields that will be updated with server era-time
	COLLATE: 'collate', //marks fields that needs to be collated/ordered .
	READ_ONLY: 'readOnly', // marks field as readonly field will not be editable in GUI

	//Events
	FIRE_EVENTS: 'fireEvents',
	FIRE_EVENTS_UPDATE: 'update',
	FIRE_EVENTS_CREATE: 'create'

};
