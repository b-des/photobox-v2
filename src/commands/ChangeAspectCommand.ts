import Command from "../interface/command/Command";
import Application from "../Application";

export default class ChangeAspectCommand implements Command {
    private app: Application;


    constructor(app: Application) {
        this.app = app;

    }

    execute(size: string[]): void {
        this.app.getViewport().setAspectRatio(parseInt(size[0]), parseInt(size[1]));
    }


}
