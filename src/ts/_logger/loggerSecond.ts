import logger from './fansyLogger';

export default function logSecond() {
  logger.printLogCount();
  logger.log('second message');
  logger.printLogCount();
}