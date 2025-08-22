import { useState } from "react";

type Blog = {
  id: number;
  img: string;
  date: string;
  month: string;
  category: string;
  title: string;
  modalContent: string[];
};

const blogData: Blog[] = [
  {
    id: 1,
    img: "assets/img/huit.jpg",
    date: "23",
    month: "Dec",
    category: "Tự sự",
    title: "Mình đã chọn ngành học như thế nào",
    modalContent: [
      `Hồi còn học lớp 12, mình thật sự chưa xác định rõ sẽ theo đuổi ngành nào. Ở tuổi đó, mình thường tự hỏi: “Mình thích gì? Mình cần gì? Và mình muốn học gì?”`,
      `Trong nhiều suy nghĩ, mình nhận ra bản thân rất hứng thú với những hoạt động liên quan đến tin học trên lớp, chẳng hạn như làm PowerPoint hay Excel. Chính điều này đã gợi cho mình một ý tưởng: “Hay là mình chọn một ngành gì đó liên quan đến máy tính?”`,
      `Từ sự tò mò đó, mình bắt đầu lên YouTube tìm hiểu. Và rồi, ngành Công nghệ thông tin xuất hiện như một lời giải đáp. Nó đúng với những gì mình tưởng tượng: được làm việc với máy tính, được tiếp xúc với công nghệ mới, và có cơ hội khám phá một thế giới rộng lớn.`,
      `Sau 4 năm học tập, mình càng tin tưởng hơn vào lựa chọn của mình. Đây là một ngành mang đậm tính sáng tạo và đòi hỏi sự học hỏi không ngừng. Mình thích điều đó, bởi mỗi ngày đều là một cơ hội để khám phá thêm điều mới mẻ.`,
      `Tất nhiên, hành trình không phải lúc nào cũng dễ dàng. Khi mới ra trường, mình từng cảm thấy khó khăn trong việc tìm việc làm, thậm chí đôi lúc tự hỏi: “Liệu mình có chọn đúng ngành không?” Thực tế, đi làm tại các công ty luôn có cả áp lực lẫn niềm vui. Nhưng chính những áp lực ấy lại trở thành động lực, giúp mình kiên trì bước tiếp.`,
      `Mặc dù hiện tại chưa đạt được tất cả những gì mình mong đợi, nhưng mình vẫn tin rằng lựa chọn ngành Công nghệ thông tin là đúng đắn. Bởi hơn hết, công việc này mang lại cho mình niềm vui, và mình biết bản thân vẫn muốn gắn bó với nó lâu dài.`,
    ],
  },
];

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  blog: Blog;
}

function BlogModal({ isOpen, onClose, blog }: BlogModalProps) {
  if (!isOpen) return null;
  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-40 bg-black/70" onClick={onClose}></div>

      {/* Modal content */}
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <div className="relative w-full h-full sm:w-[90%] sm:h-[90%] max-w-[968px] bg-white dark:bg-[#34353a] rounded-none sm:rounded-xl overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-[#34353a] z-10">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Chi tiết
            </h3>
            <button className="ml-auto" onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 sm:w-7 sm:h-7 dark:stroke-white stroke-dark"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="px-4 sm:px-8 py-6">
            <img
              src={blog.img}
              alt=""
              className="h-[200px] sm:h-[300px] md:h-[350px] w-full object-cover rounded-lg"
            />
            <h3 className="text-custom2 mt-6 text-xl sm:text-2xl md:text-3xl font-medium">
              {blog.title}
            </h3>
            <p className="font-secondary text-muted dark:text-darkmuted mt-1 text-sm sm:text-base">
              {blog.category}
            </p>
            <div className="mt-5 space-y-4 sm:space-y-5">
              {blog.modalContent.map((p, i) => (
                <p
                  key={i}
                  className="text-muted dark:text-darkmuted text-sm sm:text-base leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface BlogCardProps {
  blog: Blog;
  onClick: () => void;
}

function BlogCard({ blog, onClick }: BlogCardProps) {
  return (
    <div className="wow fadeInUp cursor-pointer" data-wow-duration="1s">
      <div onClick={onClick}>
        <div className="overflow-hidden group rounded-xl relative">
          <img
            src={blog.img}
            alt=""
            className="scale-100 rounded-xl object-cover w-full h-full min-h-[303px] duration-300 group-hover:scale-110"
          />
          <div className="bg-[#1cbe59] top-[18px] right-[18px] absolute rounded-xl text-center py-3 px-5">
            <h3 className="text-2xl text-white leading-[1.2]">{blog.date}</h3>
            <span className="text-white text-sm">{blog.month}</span>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-custom font-medium font-secondary">
            <a href="#">{blog.category}</a>
          </p>
          <h4 className="mt-1 leading-[1.4] text-[21px]">
            <a href="#" className="text-custom2 hover:text-custom">
              {blog.title}
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  return (
    <section
      className="md:pt-[185px] pt-[120px] pb-[100px] md:pb-[160px] relative"
      id="blog"
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1">
          <div className="text-center max-w-[680px] mx-auto">
            <p className="text-custom text-[20px] md:text-2xl font-medium font-secondary">
              Blog của mình
            </p>
            <h2 className="text-custom2 md:text-[48px] text-[35px] leading-[1.25] mb-[23px] mt-1.5">
              Những bài viết mới nhất
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-[65px] gap-[25px]">
          {blogData.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onClick={() => setSelectedBlog(blog)}
            />
          ))}
        </div>
      </div>

      {/* Decorative Images */}
      <div
        className="top-[250px] left-[115px] absolute hidden lg:block wow zoomIn"
        data-wow-duration="1s"
      >
        <img src="assets/img/brushes/news/1.png" alt="" />
      </div>
      <div
        className="top-0 right-0 absolute hidden lg:block wow zoomIn"
        data-wow-duration="1s"
      >
        <img src="assets/img/brushes/news/2.png" alt="" />
      </div>

      {/* Modal */}
      {selectedBlog && (
        <BlogModal
          isOpen={!!selectedBlog}
          blog={selectedBlog}
          onClose={() => setSelectedBlog(null)}
        />
      )}
    </section>
  );
}
