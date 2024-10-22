/* eslint-disable @next/next/no-img-element */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PersonalDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full cursor-pointer">
          <img
            alt="profile"
            src={"/profile.jpg"}
            className="aspect-square w-full h-full"
          />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex flex-col justify-center items-start w-full ">
            <div className="flex justify-center items-center gap-2">
              <div className="relative flex h-20 w-20 shrink-0 overflow-hidden">
                <img
                  alt="profile"
                  src={"/profile.jpg"}
                  className="aspect-square w-full h-full"
                />
              </div>
              <div>
                <p className="text-md font-semibold leading-7">
                  Ahmed Selim Hammami
                </p>
                <p className="text-xs font-light text-gray-400">
                  Coimbra 🇵🇹 | 25 years old
                </p>
                <p className="text-xs font-light">
                  currently pursuing a MS degree in Software Engineering and
                  looking for a job or freelance opportunities
                </p>
              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PersonalDialog;
