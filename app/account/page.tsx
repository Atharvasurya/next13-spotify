import Button from "@/components/Button";
import Header from "@/components/Header";


const Account = () => {
  return (
    <div 
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">
            Account Settings
            <Button
            className='
            flex
            flex-col
            gap-y-4
            w-[300px]
            items-center
            justify-center
            text-xl
            mt-2.5
            pl-px
            transition
            overflow-clip
            accent-transparent
            '
            >
              Subscribe
            </Button>
    
          </h1>
          <p
          className="
          subpixel-antialiased
          text-ellipsis
          transition-shadow
          cursor-pointer
          ">
            Developed By Atharva Suryawanshi
          </p>
        </div>
      </Header>
    </div>
  )
}

export default Account;