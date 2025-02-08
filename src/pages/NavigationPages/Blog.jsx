import React, { useState } from "react";
import { Modal, Button, Card, Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import { Blog1 } from "src/componants/blog/Blog1";

const blogData = [
  {
    title: "How To Get People To Like Industry.",
    category: "Business",
    date: "26 April",
    author: "John Doe",
    content:
      "This blog provides insights on engaging with people in the industrial sector.",
    imageUrl: "src/assets/pipes/img1.png",
  },
  {
    title: "Why You Should Not Go To Industry.",
    category: "Business",
    date: "26 April",
    author: "John Doe",
    content:
      "Discover the potential pitfalls of venturing into the industrial landscape.",
    imageUrl: "src/assets/pipes/img5.png",
  },
  {
    title: "Reasons Why You Shouldn't Rely on Construction Anymore.",
    category: "Modern",
    date: "26 April",
    author: "John Doe",
    content:
      "Explore why alternative solutions are the future of construction.",
    imageUrl: "src/assets/pipes/img2.png",
  },
  {
    title: "The Shocking Revelation of Industry.",
    category: "Modern",
    date: "26 April",
    author: "John Doe",
    content:
      "Unexpected facts about the industry sector revealed in this article.",
    imageUrl: "src/assets/pipes/img3.png",
  },
  {
    title: "The Time Is Running Out.",
    category: "Construction",
    date: "26 April",
    author: "John Doe",
    content:
      "Understand why time-sensitive decisions matter in the construction industry.",
    imageUrl: "src/assets/pipes/img1.png",
  },
  {
    title: "Praesent pharetra congue sem.",
    category: "Industry",
    date: "26 April",
    author: "John Doe",
    content:
      "A modern take on industry trends and forecasts for the coming years.",
    imageUrl: "src/assets/pipes/img1.png",
  },
];

const itemsPerPage = 3;

function Blog() {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const ReadMore = (id) => {
    navigate(`/blog/${id}`);
  };

  const showModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Paginate the data
  const paginatedData = blogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-4 sm:p-8 px-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
        Blog Section
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedData.map((blog, index) => (
          <Card
            key={index}
            hoverable
            cover={
              <img
                alt={blog.title}
                src={blog.imageUrl}
                className="w-full h-64 object-cover"
              />
            }
            className="shadow-lg h-full flex flex-col justify-between"
          >
            <div>
              <Card.Meta
                title={blog.title}
                description={`Category: ${blog.category} | By: ${blog.author}`}
              />
            </div>
            <Button
              type="primary"
              className="mt-4"
              onClick={() => showModal(blog)}
              block
              src={blog1}
            >
              Read More
            </Button>
          </Card>
        ))}
      </div>

      {/* Modal */}
      <Modal
        title={selectedBlog?.title}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <p>{selectedBlog?.content}</p>
        <p className="text-gray-500">
          {selectedBlog?.date} by {selectedBlog?.author}
        </p>
      </Modal>

      {/* Pagination Slider */}
      <div className="flex justify-center mt-6">
        <Pagination
          current={currentPage}
          total={blogData.length}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Blog;
