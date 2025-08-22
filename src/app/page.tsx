"use client";
import { useEffect, useRef, useState } from "react";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
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

export default function Home() {
  const [showAlertDialog, setShowAlertDialog] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setShowAlertDialog(true);
  }, []);

  const handleCloseDialog = () => {
    setShowAlertDialog(false);
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      audioRef.current.play().catch((err) => {
        console.log("Cannot autoplay audio:", err);
      });
    }
  };

  return (
    <>
      {showAlertDialog && (
        <AlertDialog open={showAlertDialog} onOpenChange={setShowAlertDialog}>
          <AlertDialogContent
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
             bg-white rounded-2xl shadow-lg p-6
             w-[70%] max-w-md sm:max-w-lg"
          >
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl font-bold text-brand-primary">
                Thông báo
              </AlertDialogTitle>
              <AlertDialogDescription className="text-gray-600 mt-2 leading-relaxed">
                Trang web đang trong quá trình xây dựng,{" "}
                <span className="text-brand-primary font-medium">
                  dự kiến hoàn thành trước 28/9
                </span>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                className="hover:bg-brand-primary hover:text-white border border-brand-primary text-brand-primary px-4 py-2 rounded-lg transition"
                onClick={handleCloseDialog}
              >
                Tôi đã biết
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}

      <Header />
      <HomeSection />
      <AboutSection />
      <BlogSection />
      {/* <DemoSection /> */}
      <Footer />

      {/* Thêm thẻ audio */}
      <audio ref={audioRef} src="/camonvaxinloi.mp3" loop />
    </>
  );
}
