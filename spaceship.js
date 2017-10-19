class Spaceship {
  constructor(name, crewArr, phasers, shields) {
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'
    if(crewArr.length>0) {
      this.crew = crewArr
      this.alertCrew()
      this.docked = false
    } else {
      this.docked = true
    }
  }

  alertCrew() {
    this.crew.forEach((crewMem) => {crewMem.currentShip = this}
    )
  }

}
