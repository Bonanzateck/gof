import { GameServer } from "./games/goddessoffire/goddessoffire_server";
import { SlotState } from "./libs/engine/slots/models/slot_state_model";
import { PlatformSlotTester } from "./libs/platform/tester/platform_slot_tester";

export class GoddessOfFireTester extends PlatformSlotTester {

    constructor(){
        super();
        this.game = new GameServer();
        this.buybonus = false;
    }

    protected recordSlotRTP( state:SlotState) {
        // super.recordSlotRTP(state);

        if ( state.paidSpin.length > 3 ) {
            console.log ( "cheatNums", state.cheatNums );
        }

    }
}



new GoddessOfFireTester().startTesting( 250 );
