import { createSlice} from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
       object_id: "",
       spec_version: "https://w3id.org/ieee/ieee-2791-schema/2791object.json",
       etag: "",
       bco: {
            data: {
                provenance_domain: {
                        name: 'abc',
                        version: '',
                        license: "",
                        created: new Date().toISOString().split(".")[0],
                        modified: new Date().toISOString().split(".")[0],
                        embargo: {
                            start_time: "",
                            end_time:""
                        },
                        contributors: []
                },
                usability_domain: [""],
                description_domain: {
                        pipeline_steps :[]
                }
            },
            status: "idle",
            error: null
        }

    },
    reducers: { // list of functions action
        //updateProvenanceDomain: (state, {payload: {val, key}}) => {
        updateProvenanceDomain: (state, action) => {
            state['bco']['data']["provenance_domain"] = action.payload;
            //console.log("Slice Payload", action.payload)
        },
        updateUsability: (state, action) => {
            state['bco']['data']["usability_domain"] = action.payload;
            //console.log("Usability Payload", action.payload["usability_domain"])
        },
        updateDescription: (state, action) => {
            state['bco']['data']["description_domain"] = action.payload;
            //console.log("Usability Payload", action.payload["usability_domain"])
        }

    }
})

export const reducer = rootSlice.reducer;

export const { updateProvenanceDomain, updateUsability, updateDescription } = rootSlice.actions;