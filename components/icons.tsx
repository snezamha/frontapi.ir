import {
  BsMoonStars,
  BsSun,
  BsChevronLeft,
  BsChevronRight,
  BsChevronUp,
  BsChevronDown,
  BsActivity,
  BsFire,
  BsCheck2,
} from 'react-icons/bs';
import {
  AiOutlineEllipsis,
  AiOutlineWarning,
  AiOutlinePlus,
  AiOutlineClose,
  AiFillGoogleCircle,
  AiFillGithub,
} from 'react-icons/ai';
import { MdDeleteForever, MdOutlineLogout } from 'react-icons/md';
import { BiHistory, BiCalendar ,BiCategoryAlt} from 'react-icons/bi';
import { FaUserAlt, FaSort } from 'react-icons/fa';
import { ImSpinner8, ImStatsBars } from 'react-icons/im';
import { RxDashboard, RxMixerHorizontal } from 'react-icons/rx';
import { LuSettings, LuHome ,LuSettings2 } from 'react-icons/lu';
import { Store } from 'lucide-react';
import { RiAuctionLine } from 'react-icons/ri';
import { FcShop } from "react-icons/fc";
import { AiOutlineDashboard } from "react-icons/ai";

type IconKeys = keyof typeof icons;

type IconsType = {
  [key in IconKeys]: React.ElementType;
};

const icons = {
  // Providers
  google: AiFillGoogleCircle,
  github: AiFillGithub,

  // Dashboard Icons
  dashboard: AiOutlineDashboard,
  store: Store,
  home: LuHome,
  settings: LuSettings,

  // Mode Toggle
  moon: BsMoonStars,
  sun: BsSun,

  // Navigation
  back: BsChevronLeft,
  next: BsChevronRight,
  up: BsChevronUp,
  down: BsChevronDown,
  close: AiOutlineClose,

  // Common
  trash: MdDeleteForever,
  spinner: ImSpinner8,
  userAlt: FaUserAlt,
  ellipsis: AiOutlineEllipsis,
  warning: AiOutlineWarning,
  add: AiOutlinePlus,
  history: BiHistory,
  signout: MdOutlineLogout,
  calendar: BiCalendar,
  sort: FaSort,
  fire: BsFire,
  statsBar: ImStatsBars,
  mixer: RxMixerHorizontal,
  check: BsCheck2,

  // Projects
  psetting : LuSettings2,
  categories: BiCategoryAlt,
  products : FcShop,
  auctions: RiAuctionLine,
};

export const Icons: IconsType = icons;
