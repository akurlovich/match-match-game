import logger from './fansyLogger';

export default function logFirst() {
  logger.printLogCount();
  logger.log('first message');
  logger.printLogCount();
}