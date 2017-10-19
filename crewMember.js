class CrewMember {
  constructor(position, ship) {
    this.position = position
    if(ship) {
      this.currentShip = ship
    } else {
      this.currentShip = 'Looking for a Rig'
    }
  }

  currentShip() {
    return this.currentShip
  }

  abilitiesAvailable(necessaryPos) {
    if(this.currentShip!=='Looking for a Rig' && necessaryPos===this.position) {
      return true
    } else {
      return false
    }
  }

  engageWarpDrive() {
    if(this.abilitiesAvailable('Pilot')) {
      this.currentShip.warpDrive = 'engaged!'
      return
    }else{
      return 'had no effect'
    }
  }

  setsInvisibility() {
    if (this.abilitiesAvailable('Defender')) {
      this.currentShip.cloaked = true
      return
    }else{
      return 'had no effect'
    }
  }

  chargePhasers() {
    if(this.abilitiesAvailable('Gunner')) {
      this.currentShip.phasersCharge = 'charged!'
      return 
    }else{
      return 'had no effect'
    }
  }

}
