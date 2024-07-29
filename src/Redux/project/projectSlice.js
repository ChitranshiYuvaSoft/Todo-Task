import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectIndex:0,
  projectData: [
    {
      _id: 1,
      title: "Project Redux Title - 1",
      featureData: [
        {
          _id: 11,
          title: "Feature Redux Title - 1.1",
          todoData: [
            {
              _id: 111,
              title: "Todo Redux Title - 1",
            },
          ],
        },

        {
          _id: 12,
          title: "Feature Redux Title - 1.2",
          todoData: [
            {
              _id: 121,
              title: "Todo Redux Title - 1",
            },
            {
              _id: 122,
              title: "Todo Redux Title - 1",
            },
            {
              _id: 123,
              title: "Todo Redux Title - 1",
            },
          ],
        },
      ],
    },





    {
      _id: 2,
      title: "Project Redux Title - 2",
      featureData: [
        {
          _id: 21,
          title: "Feature Redux Title - 2.1",
          todoData: [
            {
              _id: 211,
              title: "Todo Redux Title - 1",
            },
            {
              _id: 221,
              title: "Todo Redux Title - 1",
            },
          ],
        },
      ],
    },









    {
      _id: 3,
      title: "Project Redux Title - 3",
      featureData: [
        {
          _id: 31,
          title: "Feature Redux Title - 3.1",
          todoData: [
            {
              _id: 311,
              title: "Todo Redux Title - 1",
            },
          ],
        },
        {
          _id: 32,
          title: "Feature Redux Title - 3.2",
          todoData: [],
        },
      ],
    },
  ],
};

const projectSlice = createSlice({
  name: "todoData",
  initialState,
  reducers: {
    indexUpdate : (state, action) => {
      console.log(action.payload, "from slice")
      const indexData = action.payload
      // console.log(projectIndex, "slice Data")
      return {
        ...state,
        projectIndex : indexData
      }
    }
  },
  extraReducers: (builder) => {},
});


export const {indexUpdate} = projectSlice.actions
export default projectSlice.reducer;
