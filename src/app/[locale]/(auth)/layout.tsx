import Footer from '@/components/layout/footer/footer';
import LocalSwitcher from '@/components/shared/locale-switcher';
import ThemeButton from '@/components/shared/theme-switcher';

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <div className='flex justify-end items-center gap-5 w-full p-5'>
        <LocalSwitcher />
        <ThemeButton />
      </div>
      <div className='flex justify-center items-center grow h-full overflow-hidden'>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
