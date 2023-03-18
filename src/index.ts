import { 
    Agent, 
    WACIProtocol,
    WACICredentialOfferSucceded, 
    WACICredentialOfferResult
} from "@extrimian/agent";

const hiroDID = 'did:quarkid:matic:EiAafYgtdgkBmeZRp86xtydU87PN8gdQ8H4DBu1u8bKfXA';

const waciProtocol = new WACIProtocol({
    issuer:{
        issueCredentials: async (waciInvitationId: string, holderId: string) => {
            return new WACIential: {
                        "@context": [
                            "https://www.w3.org/2018/credentials/v1",
                      CredentialOfferSucceded({
                credentials: [{
                    cred      "https://www.w3.org/2018/credentials/examples/v1",
                            "https://w3id.org/security/bbs/v1"
                        ],
                        id: "",
                        type: [
                            "VerifiableCredential",
                            "AlumniCredential"
                        ],
                        issuer: "did:quarkid:matic:EiDs1liYifwFEg9l7rxrpR48MH-7Z-M2E32R1vEYThQWsQ",
                        issuanceDate: new Date(),
                        credentialSubject: {
                            id: "did:quarkid:matic:EiAafYgtdgkBmeZRp86xtydU87PN8gdQ8H4DBu1u8bKfXA",
                            giveName: "Jhon",
                            familyName: "Does"
                        },
                    },
                    outputDescriptor: {
                        id: "alumni_credential_output",
                        schema: "https://schema.org/EducationalOccupationalCredential",
                        display: {
                            title: {
                                path: [
                                    "$.name",
                                    "$.vc.name"
                                ],
                                fallback: "Alumni Credential"
                            },
                            subtitle: {
                                path: [
                                    "$.class",
                                    "$.vc.class"
                                ],
                                fallback: "Alumni",
                            },
                            description: {
                                "text": "Credencial que permite validar que es alumno del establecimiento"
                            },
                        },
                        styles: {
                            background: {
                                color: "#ff0000"
                            },
                            thumbnail: {
                                uri: "https://dol.wa.com/logo.png",
                                alt: "Universidad Nacional"
                            },
                            hero: {
                                uri: "https://dol.wa.com/alumnos.png",
                                alt: "Alumnos de la universidad"
                            },
                            text: {
                                color: "#d4d400"
                            }
                        }
                    }
                }],
                issuer: {
                    name: "Universidad Nacional",
                    styles: {
                        thumbnail: {
                            uri: "https://dol.wa.com/logo.png",
                            alt: "Universidad Nacional"
                        },
                        hero: {
                            uri: "https://dol.wa.com/alumnos.png",
                            alt: "Alumnos de la universidad"
                        },
                        background: {
                            color: "#ff0000"
                        },
                        text: {
                            color: "#d4d400"
                        }
                    }
                },
                options: {
                    challenge: "508adef4-b8e0-4edf-a53d-a260371c1423",
                    domain: "9rf25a28rs96"
                },
            });
        }
    },
    verifier: {
        presentationDefinition: async (invitationId: string) => {
            return {
                frame: {
                    "@context": [
                        "https://www.w3.org/2018/credentials/v1",
                        "https://www.w3.org/2018/credentials/examples/v1",
                        "https://w3id.org/security/bbs/v1"
                    ],
                    "type": [
                        "VerifiableCredential",
                        "AlumniCredential"
                    ],
                    "credentialSubject": {
                        "@explicit": true,
                        "type": [
                            "AlumniCredential"
                        ],
                        "givenName": {},
                        "familyName": {}
                    }
                },
                inputDescriptors: [
                    {
                        id: "Alumni Credential",
                        name: "AlumniCredential",
                        constraints: {
                            fields: [
                                {
                                    path: [
                                        "$.credentialSubject.givenName"
                                    ],
                                    filter: {
                                        type: "string"
                                    }
                                },
                                {
                                    path: [
                                        "$.credentialSubject.familyName"
                                    ],
                                    filter: {
                                        type: "string"
                                    }
                                }
                            ]
                        }
                    }
                ],
            }
        }
    }
});
