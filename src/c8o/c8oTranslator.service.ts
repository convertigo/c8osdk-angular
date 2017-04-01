export class C8oTranslator {

    static stringToXml(xmlString: string): XMLDocument {
        let parser = new DOMParser();
        return parser.parseFromString(xmlString, "text/xml");
    }

    static stringToJSON(jsonValueString): JSON {
        return JSON.parse(jsonValueString);
    }
}