(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{306:function(e,t,a){"use strict";a.r(t);var o=a(46),r=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("In the past few years, it seems that, as retro gaming has grown in popularity, programming for older platforms has also gained traction. A popular platform is the Game Boy, both for its nostalgia and (relative) ease to program for.")]),e._v(" "),a("p",[a("strong",[e._v("Important: this document only applies to the Game Boy and Game Boy Color. Game Boy Advance programming has nothing in common with Game Boy programming.")]),e._v(" If you want to program for the GBA, which is much more C-friendly (and C++ and Rust, for that matter) than the GB and GBC, then I advise you download devkitARM and follow the "),a("a",{attrs:{href:"https://www.coranac.com/tonc/text/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tonc"),a("OutboundLink")],1),e._v(" tutorial. Please note that the Game Boy Advance also functions as a Game Boy Color, so if you only have a GBA, you can use it for both GB and GBC development.")]),e._v(" "),a("p",[e._v("When someone wants to make their own game, one of the first problems they will encounter is picking the "),a("em",[e._v("tools")]),e._v(" they will use. There are two main options: either use GBDK (Game Boy Development Kit) and the language C, or RGBDS (Rednex Game Boy Development System) and the Game Boy's assembly language.")]),e._v(" "),a("p",[e._v('The purpose of this document is to provide my insights and experience, and help you make the better choice if you\'re starting a new project. I will also provide some "good practice" tips, both for C and ASM, if you have already made up your mind or are already using one of these.')]),e._v(" "),a("h1",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("The original Game Boy, codenamed the DMG, has a 1 MHz CPU [the CPU is actually clocked at 4 MHz, but every instruction takes up a multiple of 4 clocks, so it's often simplified to a 1 MHz CPU]. Given that an instruction takes approximately 2 to 3 cycles, this gives the CPU a capacity of 333,000~500,000 instructions per second.\nIts LCD boasts 60 fps [it's actually 59.73 fps], which rounds up to between 50,000 and 80,000 instructions per frame. Suddenly not so much, eh?\nIt also has 8 kB of RAM, and 8 kB of video RAM ; a 160x144 px LCD (thus slightly wider than it's tall), 4 colors, and 4-channel audio.")]),e._v(" "),a("p",[e._v("The Super Game Boy adds a few minor things, such as a customizable screen border, and some crude color. It's also slightly faster than the DMG.")]),e._v(" "),a("p",[e._v("The Game Boy Color "),a("em",[e._v("can")]),e._v(" [if you tell it to] unlock additional functionality, such as more fleshed-out color, a double-speed CPU, twice the video RAM and "),a("em",[e._v("four times")]),e._v(" the RAM! (With caveats, obviously.)")]),e._v(" "),a("h1",{attrs:{id:"development-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development-tools","aria-hidden":"true"}},[e._v("#")]),e._v(" Development Tools")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://gbdk.sourceforge.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("GBDK"),a("OutboundLink")],1),e._v(" is a development suite, built around the SDCC compiler, which allows you to write C code for the Game Boy, including functions that allow interfacing with the Game Boy without worrying too much about the details. GBDK is currently available only for Windows.")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://github.com/rednex/rgbds",target:"_blank",rel:"noopener noreferrer"}},[e._v("RGBDS"),a("OutboundLink")],1),e._v(" is an actively maintained quatuor of programs that allow building a ROM using ASM (assembly). It contains three programs that perform different stages of the compilation, as well as a program that converts PNG images to the Game Boy's tile format. RGBDS is available for Linux, Windows and Mac.")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/vhelin/wla-dx",target:"_blank",rel:"noopener noreferrer"}},[e._v("WLA-DX"),a("OutboundLink")],1),e._v(" is also sometimes used, mostly due to its better struct support than RGBDS.")])])]),e._v(" "),a("p",[e._v("To run and debug the final product, an emulator is most often used.")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://bgb.bircd.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("BGB"),a("OutboundLink")],1),e._v(" is perfect for the task thanks to its near-perfect accuracy and very convenient debugger. Its UI tends to be confusing at first, though. BGB is available for Windows only, but runs almost flawlessly with Wine.")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://github.com/sinamas/gambatte",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gambatte"),a("OutboundLink")],1),e._v(" has a near-perfect accuracy, on par with BGB's, although subtly different. It lacks a debugger and must be compiled from source, but is packaged both in "),a("a",{attrs:{href:"http://retroarch.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("RetroArch"),a("OutboundLink")],1),e._v(" (Linux, Windows and Mac) and "),a("a",{attrs:{href:"http://tasvideos.org/BizHawk.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("BizHawk"),a("OutboundLink")],1),e._v(" (Windows-only).")])])]),e._v(" "),a("p",[e._v("Purists prefer to also run their games on hardware, which is possible thanks to flashcarts. My personal recommendation is "),a("a",{attrs:{href:"http://krikzz.com/store/",target:"_blank",rel:"noopener noreferrer"}},[e._v("krikzz's carts"),a("OutboundLink")],1),e._v(", particularly the "),a("a",{attrs:{href:"https://krikzz.com/store/home/47-everdrive-gb.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Everdrive GB X5"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Side note : if you are using VBA or VBA-rr, "),a("strong",[e._v("stop using them right now")]),e._v(". These emulators are extremely inaccurate, and also contain "),a("strong",[e._v("severe security flaws")]),e._v(". I strongly urge you to ditch these emulators and spread the word.")]),e._v(" "),a("h1",{attrs:{id:"picking-a-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picking-a-language","aria-hidden":"true"}},[e._v("#")]),e._v(" Picking A Language")]),e._v(" "),a("p",[e._v("The choice of platform to run the ROM on doesn't matter much, but the language is extremely important.")]),e._v(" "),a("p",[e._v("ASM is a good choice, since it's not too difficult to learn, is extremely powerful and flexible, and RGBDS is a good tool, which further works quite well with BGB for debugging. Its two largest issues are that it takes a special kind of work to write optimized ASM code, and that it's quite verbose and sometimes tedious.")]),e._v(" "),a("p",[e._v("C is a much more complicated matter, discussed below.")]),e._v(" "),a("h1",{attrs:{id:"c-s-problems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-s-problems","aria-hidden":"true"}},[e._v("#")]),e._v(" C's Problems")]),e._v(" "),a("p",[e._v("C's problems can be separated into a few that are inherent to the language, and a lot more that come from GBDK.")]),e._v(" "),a("h2",{attrs:{id:"the-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-language","aria-hidden":"true"}},[e._v("#")]),e._v(" The Language")]),e._v(" "),a("p",[e._v("C is a compiled language, meaning the C code is translated into ASM code, which is then turned into the ROM. The problem is that due to the way C is defined, it is often substantially slower than hand-written ASM. On modern computers clocking at a few GHz with multithreading, memory caches etc., this additional overhead is negligible. On the Game Boy, it's much more apparent (the green bar represents the CPU's load) :")]),e._v(" "),a("p",[e._v("With C :")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://media.giphy.com/media/26hirMERbslnl0I2A/giphy.gif",alt:"Game in C"}})]),e._v(" "),a("p",[e._v("With ASM :")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://media.giphy.com/media/l0MYM229WAV40G7XG/giphy.gif",alt:"Game in ASM"}})]),e._v(" "),a("p",[a("a",{attrs:{href:"https://imanoleasgames.blogspot.fr/2016/09/games-aside-0-ensamblador-en-game-boy.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Source: screenshots of Last Crown Warriors, by Imanolea, found on his blog Imanolea's Games"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("The overhead is also due to C being a stack-oriented language [if you don't know what that means, ignore this paragraph], whereas the Game Boy's CPU is rather built for a register-oriented strategy. This most notably makes passing function arguments a lot slower.")]),e._v(" "),a("p",[e._v("Another problem is that you lose advanced debugging; BGB allows for precise debugging, but only debugs the compiled ASM (unlike "),a("code",[e._v("gdb")]),e._v(", for example). Thus, all debugging will have to be done without this very helpful tool.")]),e._v(" "),a("p",[e._v("Overall, using C on the Game Boy is significantly slower than ASM. But let's not be unjust here: Most of the overhead isn't actually the language's fault.")]),e._v(" "),a("h2",{attrs:{id:"gbdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gbdk","aria-hidden":"true"}},[e._v("#")]),e._v(" GBDK")]),e._v(" "),a("p",[e._v("GBDK is... poorly written, to say the least. I'm going to list some of its major problems; the goal isn't to discourage anyone to use GBDK, but to make you realize its weaknesses and limits.")]),e._v(" "),a("p",[e._v("It's built on an ancient build of SDCC, which is known to generate poor (bloated) and often straight up wrong code. Two examples that come to mind are when compiled code moved the stack to an absurd location [if you are interested, it ran a "),a("code",[e._v("add sp, $7D")]),e._v(" with "),a("code",[e._v("sp")]),e._v(" = "),a("code",[e._v("$DFA?")]),e._v(", and ended up at "),a("code",[e._v("$E02?")]),e._v("]; the other example is if you try to multiply by a power of 2, say, "),a("code",[e._v("8")]),e._v(". The compiler will helpfully optimize that to a bitshift (because "),a("code",[e._v("* 2^n")]),e._v(" is the same as "),a("code",[e._v("<< n")]),e._v(")... but shift by one too much, and in our case, multiply by "),a("code",[e._v("16")]),e._v("!")]),e._v(" "),a("p",[e._v("A very nasty issue with GBDK is that the library it provides is not explicit at all as to what a given function does. First, this makes a lot of questions people ask us redundant, when they could simply be solved by knowing how the Game Boy works. Second, when a bug pops up, people are confused about its origin: what's wrong, their code, their usage of the library, the library itself (it happens), or the Game Boy (it has hardware bugs)?")]),e._v(" "),a("p",[e._v("Further, the library is fairly constraining, for example forcing the way tiles are allocated in VRAM.")]),e._v(" "),a("p",[e._v("Also, it's totally possible for anyone to write awful code without even realizing it. A simple reason is that the Game Boy's CPU is only capable of performing 8-bit addition or subtraction, or 16-bit addition. I think you'll have figured out that using "),a("code",[e._v("INT32")]),e._v("s must be quite taxing on the CPU (it needs to do two consecutive 16-bit adds, and add the carry). This is the reason why I'm providing some tips below, to avoid such blunders.")]),e._v(" "),a("p",[e._v("And finally, banking. Banking in GBDK is very unintuitive, as far as I have seen it in action. Tutorials don't seem to help a lot, either.")]),e._v(" "),a("h1",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary","aria-hidden":"true"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v('If your question is "'),a("em",[e._v("What should I use for my game project ?")]),e._v("\", then you're in the right section.")]),e._v(" "),a("p",[e._v("The first question you should ask yourself is what languages you know. If you have never worked with ASM, C or C++, you should start by learning C. This will introduce to how you interface with the hardware when you're close to it (pointers, above all)., If you grasped C's concepts (most importantly pointers), give ASM a go. Even if you don't manage to get working ASM code, it actually helps a lot (especially on such a constrained system) to know what's \"under the hood\". Especially with GBDK's crappy lib, it's particularly useful to use ASM-level debugging tools to figure what exactly is wrong.")]),e._v(" "),a("p",[e._v("Now, I'll be assuming you know at least C. If you are okay with ASM, I recommend going with that. It will cut a lot of the hassle GBDK may generate.")]),e._v(" "),a("p",[e._v("The third question to ask is the size of your project. Due to the issues with banking, I wouldn't recommend GBDK if your project is going to be large enough that banking is required, also because of the performance issue, since your project might end up being too large for the CPU, too.")]),e._v(" "),a("p",[e._v("If you haven't decided yet, you should consider giving ASM a try; the language is simpler than it looks. Even if you just end up writing a few functions then switching to C, you will have learned something. If you don't want to learn ASM, that's okay, too.")]),e._v(" "),a("p",[e._v("Another option is to "),a("a",{attrs:{href:"#community-and-help"}},[e._v("reach out to us")]),e._v(", and discuss the matter.")]),e._v(" "),a("h2",{attrs:{id:"alternatives-to-gbdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternatives-to-gbdk","aria-hidden":"true"}},[e._v("#")]),e._v(" Alternatives To GBDK")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/andreasjhkarlsson/gbdk-n",target:"_blank",rel:"noopener noreferrer"}},[e._v("GBDK-n"),a("OutboundLink")],1),e._v(" brings GBDK to newer SDCC versions, which produce much better code. This eliminates part of the performance problem, but keeps all library-related issues. It is (at the time of writing this) lacking banking support. If you intend to do a small project (in size, such as Flappy Boy or Tobu Tobu Girl), then GBDK-n is certainly a good choice.")]),e._v(" "),a("p",[e._v('Below is the "experimental zone"; ie. projects that aren\'t finished yet, but that may provide significant alternatives once they will be completed.')]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/DonaldHays",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dovuro / DonaldHays"),a("OutboundLink")],1),e._v(" has built a barebones custom toolchain and library for his game "),a("a",{attrs:{href:"https://github.com/DonaldHays/event-aurora",target:"_blank",rel:"noopener noreferrer"}},[e._v("Event Aurora"),a("OutboundLink")],1),e._v(". A project is to flesh out this lib into a GBDK equivalent.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/Bevinsky",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bevinsky"),a("OutboundLink")],1),e._v(" is attempting to make a GBz80 backend for LLVM. tl;dr: this would allow to use "),a("code",[e._v("clang")]),e._v(" to make code for the Game Boy. If this succeeds, then a new library could be built around it, to remove the problems that GBDK's libs cause."),a("br"),e._v("EDIT: The backend is working, although only a few features of C are implemented (functions aren't :p). The project is on the right tracks!")]),e._v(" "),a("h1",{attrs:{id:"tips-for-better-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips-for-better-code","aria-hidden":"true"}},[e._v("#")]),e._v(" Tips For Better Code")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("very first thing")]),e._v(" to do "),a("strong",[e._v("in all cases")]),e._v(" is to "),a("a",{attrs:{href:"http://gbdev.gg8.se/wiki/articles/Pan_Docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("read the docs"),a("OutboundLink")],1),e._v(", to grasp how the Game Boy works. In ASM, this is essential; in C, this will let you understand what a given library function does. It will also let you understand what is possible on the Game Boy, and what isn't. (You can always ask, if you have doubts.)")]),e._v(" "),a("p",[e._v("I also recommend looking up "),a("a",{attrs:{href:"http://github.com/avivace/awesome-gbdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("awesome-gbdev"),a("OutboundLink")],1),e._v(" for resources and tutorials. There are a lot of helpful articles there, as well as helper tools.")]),e._v(" "),a("h2",{attrs:{id:"asm-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asm-help","aria-hidden":"true"}},[e._v("#")]),e._v(" ASM Help")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Modules")]),a("br"),e._v('\nSeparate your game into several "entities" that interact together. Camera, Player, NPCs, Loading zones, etc. This simplifies coding, by allowing you to reason independently on smaller units. This facilitates development and reduces the amount of bugs.')]),e._v(" "),a("li",[a("em",[e._v("Document your functions")]),a("br"),e._v("\nFor each function, write a comment saying what it does, what memory it touches, and what registers it affects. This will avoid conflicts, and let you optimize your code by minimizing the amount of registers you save when calling a function.")]),e._v(" "),a("li",[a("em",[e._v("Plan before writing")]),a("br"),e._v("\nYou should plan what register is going to be used for what within your functions "),a("em",[e._v("before starting to write them")]),e._v(". Your goal is to minimize the amount of register swapping. There's no general rule, so feel free to drop by and ask us, if you're in doubt.")]),e._v(" "),a("li",[a("em",[e._v("RGBASM "),a("code",[e._v("-E")]),e._v(" and RGBLINK "),a("code",[e._v("-n <symfile>")])]),a("br"),e._v("\nWhen you load "),a("code",[e._v("ROM.gb")]),e._v(" or "),a("code",[e._v("ROM.gbc")]),e._v(" in BGB, it automatically loads (if it exists) the file "),a("code",[e._v("ROM.sym")]),e._v(" in the same folder as the ROM. This adds symbols to the debugger, which - believe me - helps "),a("em",[e._v("a ton")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"optimizing-for-gbdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimizing-for-gbdk","aria-hidden":"true"}},[e._v("#")]),e._v(" Optimizing For GBDK")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Global variables")]),a("br"),e._v("\nUse as many global variables as you can; the Game Boy has a lot of RAM compared to other platforms such as the NES, but is slow at using the stack. Thus, minimizing the number of local variables, especially in heavily-called functions, will reduce the time spent manipulating the stack.")]),e._v(" "),a("li",[a("em",[e._v("Optimized code")]),a("br"),e._v("\nSDCC doesn't seem to have optimization passes, so you should write code as efficient as possible. There will be a readability tradeoff after some point, so I recommend you get the comment machine gun out and put some everywhere.")]),e._v(" "),a("li",[a("em",[e._v("Inlining")]),a("br"),e._v("\nAvoid using functions if you can inline them, which skips passing all arguments to the stack, mostly. Macros will be your friends there.")]),e._v(" "),a("li",[a("strong",[e._v("NEVER use recursive functions")])]),e._v(" "),a("li",[a("strong",[e._v("NEVER use printf")]),a("br"),e._v(" "),a("code",[e._v("printf")]),e._v(" clobbers a sizeable chunk of VRAM with unnecessary text tiles (unless you absolutely need hebrew in your game, I s'pose?). Instead, you should "),a("code",[e._v("sprintf")]),e._v(" to a buffer in WRAM, then put that on the screen. Bonus: this lets you use a custom font!")]),e._v(" "),a("li",[a("em",[e._v("Geometry funcs")]),a("br"),e._v("\nAvoid the functions that draw geometry on-screen (lines, rectangles, etc.). The Game Boy isn't designed for this kind of drawing method, and you will have a hard time mixing this with, say, background art. Plus, the functions are super slow.")]),e._v(" "),a("li",[a("code",[e._v("const")]),e._v(" (very important!)"),a("br"),e._v("\nDeclaring something as "),a("code",[e._v("const")]),e._v(" "),a("strong",[e._v("severely")]),e._v(" reduces its size in the ROM, RAM usage, and CPU usage."),a("br"),e._v("\nThe technical reason behind that is that non-"),a("code",[e._v("const")]),e._v(" values, "),a("em",[e._v("especially")]),e._v(" arrays, are loaded to RAM from ROM in an "),a("em",[e._v("extremely")]),e._v(" inefficient way. This takes up a LOT more ROM, and copies the value(s) to RAM when it's unneeded. (And the GB does not have enough RAM for that to be viable.)")]),e._v(" "),a("li",[a("em",[e._v("Don't use MBC1")]),a("br"),e._v("\nMBC1 is often assumed to be the simplest of all MBCs... but it has a quirk that adds some overhead every time ROM or SRAM bank switches are performed. MBC3 and MBC5 don't have this quirk, and don't add any complexity. Using MBC1 has no real use. (Let's not talk about MBC2, either.)")])]),e._v(" "),a("h1",{attrs:{id:"community-and-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#community-and-help","aria-hidden":"true"}},[e._v("#")]),e._v(" Community And Help")]),e._v(" "),a("p",[e._v("If you want to get help from the community, go:")]),e._v(" "),a("ul",[a("li",[e._v("to the historical IRC channel, #gbdev on "),a("a",{attrs:{href:"http://efnet.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("EFNet"),a("OutboundLink")],1),e._v(' [if you don\'t have an IRC client, you can use the "Webchat login" box, just enter a username],')]),e._v(" "),a("li",[e._v("to the more recent "),a("a",{attrs:{href:"https://discord.gg/gpBxq85",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord server"),a("OutboundLink")],1),e._v(",")]),e._v(" "),a("li",[e._v("and to the "),a("a",{attrs:{href:"http://gbdev.gg8.se/forums",target:"_blank",rel:"noopener noreferrer"}},[e._v("GBDev forums"),a("OutboundLink")],1),e._v("!")])]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Written by "),a("a",{attrs:{href:"https://github.com/ISSOtm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISSOtm"),a("OutboundLink")],1),e._v(" with help from "),a("a",{attrs:{href:"https://github.com/tobiasvl",target:"_blank",rel:"noopener noreferrer"}},[e._v("tobiasvl"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("I'm an active member of the GBDev community, which I joined about half a year ago. While that may seem small, my experience as a developer (check out my project, "),a("a",{attrs:{href:"https://github.com/ISSOtm/Aevilia-GB/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Aevilia"),a("OutboundLink")],1),e._v(") and as a moderator of the Discord server, has allowed me to interact with RGBDS and GBDK users alike.")]),e._v(" "),a("p",[e._v("Hopefully reading this was useful to you!")])])},[],!1,null,null,null);t.default=r.exports}}]);