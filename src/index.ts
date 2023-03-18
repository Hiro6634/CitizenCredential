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
            return new WACICredentialOfferSucceded({
                credentials: [{
                    credential: {
                        "@context": [
                            "https://www.w3.org/2018/credentials/v1",
                            "https://www.w3.org/2018/credentials/examples/v1",
                            "https://w3id.org/security/bbs/v1"
                        ],
                        id: "",
                        type: [
                            "VerifiableCredential",
                            "AlumniCredential"
                        ],
                        issuer: "",
                        issuanceDate: new Date(),
                        credentialSubject: {
                            id: "",
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
            });
        }
    },
});
