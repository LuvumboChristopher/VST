import React, { useState } from 'react';
import data from '../../../../data/data.json';
import {
  FAQSection,
  FaqImgContainer,
  FAQContent,
  FAQTitle,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  Pagination,
  PaginationButton,
  FAQSubtitle,
  FAQHeader,
  FAQContentContainer,
  FaqFooter,
  FaqBody
} from '../../style';

const FAQ = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = data.faq.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const totalPages = Math.ceil(data.faq.length / questionsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <FAQSection id="faq">
      <FaqImgContainer />
      <FAQContent>
        <FAQContentContainer>
          <FAQHeader>
            <FAQTitle>FAQ</FAQTitle>
            <FAQSubtitle>Questions Fréquemment Posées</FAQSubtitle>
          </FAQHeader>
          <FaqBody>
          {currentQuestions.map((item, index) => (
              <FAQItem key={index}>
                <FAQQuestion>{item.question}</FAQQuestion>
                <FAQAnswer>{item.answer}</FAQAnswer>
              </FAQItem>
            ))}
          </FaqBody>
          <FaqFooter>
            <Pagination>
              {Array.from({ length: totalPages }, (_, index) => (
                <PaginationButton
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={currentPage === index + 1 ? 'active' : ''}
                >
                  {index + 1}
                </PaginationButton>
              ))}
            </Pagination>
          </FaqFooter>
        </FAQContentContainer>
      </FAQContent>
    </FAQSection>
  );
};

export default FAQ;
