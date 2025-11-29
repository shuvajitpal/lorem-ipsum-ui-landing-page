import Logo from "@/Buttons/Logo";

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#171E2B] h-120 relative text-white">
        <div className="relative top-10 left-16 flex">
          <Logo />
        </div>
        <div className="flex flex-row pl-80 gap-30 pt-10">
          <div className="space-y-4 mr-10">
            <h3 className="font-semibold text-lg mb-8">Lorem Ipsum</h3>
            <div className="hvav">Lorem Ipsum</div>
            <div className="hvav">Lorem Ipsum</div>
            <div className="hvav">Lorem Ipsum</div>
            <div className="hvav">Lorem Ipsum</div>
          </div>
          <div className="space-y-4 -mr-4">
            <h3 className="font-semibold mb-8 text-lg">Lorem Ipsum</h3>
            <div className="hvav">Lorem Ipsum</div>
            <div className="hvav">Lorem Ipsum</div>
            <div className="hvav">Lorem Ipsum</div>
            <div className="hvav">Lorem Ipsum</div>
          </div>
          <div className="space-y-4 -mr-8">
            <h3 className="font-semibold mb-8 text-lg">Lorem Ipsum</h3>
            <div className="hvav">Lorem Ipsum</div>
            <div className="hvav">Lorem Ipsum</div>
            <div className="hvav">Lorem Ipsum</div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold mb-8 text-lg">Lorem Ipsum</h3>
            <div className="hvav">Lorem Ipsum</div>
          </div>
        </div>
      </div>
    </footer>
  )
}