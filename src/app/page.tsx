"use client";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useEffect, useState } from "react";

export default function Home() {
  const [showAlertDialog, setshowAlertDialog] = useState<boolean>(false);

  useEffect(() => {
    setshowAlertDialog(true);
  }, []);
  return (
    <>
      {showAlertDialog ? (
        <AlertDialog open={showAlertDialog} onOpenChange={setshowAlertDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-brand-primary">
                Thông báo
              </AlertDialogTitle>
              <AlertDialogDescription>
                Trang web đang trong quá trình xây dựng,{" "}
                <span className="text-brand-primary">
                  dự kiến hoàn thành trước 28/9
                </span>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="hover:bg-brand-primary hover:text-white  border-brand-primary text-brand-primary">
                Tôi đã biết
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ) : (
        <></>
      )}
      <Header />
      <HomeSection></HomeSection>
      <AboutSection />
      <Footer />
    </>
  );
}
