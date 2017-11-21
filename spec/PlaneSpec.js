'use strict';

describe('Plane', function(){
  let plane;
  let airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObject('airport', ['clearForLanding'], ['_hangar']);
  });

  it('can land at the airport', function(){
    plane.land(airport);
    expect(airport.clearForLanding.toHaveBeenCalledWith(plane);
  });

  it('can takeoff from the airport', function() {
    plane.land(airport);
    plane.takeoff();
    expect(airport._hangar).toEqual([])
  });
  
});
