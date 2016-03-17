class GroupsManager {
  private groups:Object;
  private groupsTypes:string[]
  
  constructor() {
    this.groupsTypes = [];
    this.groups = {};
    
    // Game internal behaviors
    this.groupsTypes.push("grounds");
    this.groupsTypes.push("statics");
    this.groupsTypes.push("movings");
    this.groupsTypes.push("items");
    
    // Bot behaviors
    this.groupsTypes.push("destroy");
    this.groupsTypes.push("fix");
    this.groupsTypes.push("up");
    this.groupsTypes.push("down");
    
    // Initialize the groups
    for (let groupType of this.groupsTypes) {
      this.groups[groupType] = [];
    }
  }

  private addOneInstance(groupName:string, instance:Sup.Actor) {
    // FIXME : Control that the group name is known
    this.groups[groupName].push(instance);
  } // ! addOneInstance

  /**
   * Add given instance to the group <groupName> (or an array of groups).
   */
  addInstance(groupName, instance:Sup.Actor) {
    if (groupName instanceof Array) {
      for (let name of groupName) {
        this.addOneInstance(name, instance);
      }
    } else {
      this.addOneInstance(groupName, instance);
    }
  } // ! addInstance

  /**
   * Remove given instance from all the groups.
   */
  removeInstance(instance:Sup.Actor) {
    for (let groupType of this.groupsTypes) {
      let group = this.groups[groupType];
      
      let index:number = group.indexOf(instance, 0);
      
      if (index > -1) {
        group.splice(index, 1);
      }
    }
  } // ! removeInstance

  getActors(groupName:string):Sup.Actor[] {
    return this.groups[groupName];
  } // ! getActors

  getArcadePhysics(groupName:string):Sup.ArcadePhysics2D.Body[] {
    return this.getActors(groupName).map(actor => actor.arcadeBody2D);
  }
}
