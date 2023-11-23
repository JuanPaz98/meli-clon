import { NgModule } from "@angular/core";
import { AuthGuard } from "./guards/auth.guard";

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [AuthGuard]
})
export class coreModule {}