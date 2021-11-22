import { groupService } from "../../services/groupService.js";

export function loadGroups(filterBy, filterName) {
  return async (dispatch) => {
    const groups = await groupService.query(filterBy, filterName);
    console.log("groups \n" + JSON.stringify(groups));
    dispatch({ type: "LOAD_GROUPS", groups });
  };
}

export function saveGroup(group) {
  return async (dispatch) => {
    const groupToSave = await groupService.save(group);
    dispatch({ type: "SAVE_GROUP", groupToSave });
  };
}

export function removeGroup(groupId) {
  return async (dispatch) => {
    await groupService.remove(groupId);
    dispatch({ type: "REMOVE_GROUP", groupId });
  };
}